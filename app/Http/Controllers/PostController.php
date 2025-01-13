<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Category;
use App\Models\Comment;
use App\Models\Like;
use App\Models\Post;
use App\States\Post\Draft;
use App\States\Post\Published;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Illuminate\Support\Str;
use App\States\Post\PostState;

use function Laravel\Prompts\search;

class PostController extends Controller
{
    public function index()
    {
        $sortMode = request('sort_mode', 'desc');
        $search = request('search', '');

        if ($search) {
            $posts = Post::where('title', 'like', '%' . $search . '%');
        } else {
            $posts = Post::query();
        }

        $posts = $posts->published()->orderBy('published_at', $sortMode)->paginate(5)->onEachSide(1);
        $categories = Category::whereHas('posts', function ($query) {
            $query->published();
        })->take(10)->get();


        foreach ($posts as $post) {
            $post->body = $post->getExcerpt();
            $post->readingTime = $post->getReadingTime();
            $post->author = $post->user;
            $post->categories = $post->categories;
            $post->publishedAt = $post->published_at->diffForHumans();
            $post->likes = $post->getLikes();
        }

        return Inertia::render("Blog/Index", [
            'posts' => $posts,
            'queryParams' => request()->query() ?: null,
            'categories' => $categories,
        ]);
    }

    public function show(Post $post)
    {
        $post->author = $post->user;
        $post->publishedAt = $post->published_at->diffForHumans();
        $post->categories = $post->categories;
        $post->comments = $post->comments;

        foreach ($post->comments as $comment) {
            $comment->author = $comment->user;
            $comment->publishedAt = $comment->created_at->diffForHumans();
            $comment->likes = $comment->getLikes();
        }

        return Inertia::render(
            "Blog/Show",
            [
            'article' => $post,
            ]
        );
    }

    public function create()
    {
        return inertia(("Blog/Create"));
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate(
            [
            'image' => 'nullable|image|max:2048',
            'title' => 'required|max:255',
            'slug' => 'required|max:30',
            'body' => 'required|max:255',
            'state' => Rule::in(['published', 'draft']),
            ]
        );

        $image = $request->image ? $request->image->store('post/' . Str::random(), 'public') : null;
        $data['user_id'] = Auth::id();
        $data['image'] = $image;

        $post = Post::create($data);

        return Redirect::to('/dashboard');
    }

    public function like(Post $post)
    {
        $user_id = Auth::id();
        if ($post->hasLiked($post, $user_id)) {
            $post->likes()->where('user_id', $user_id)->delete();
        } else {
            $post->likes()->create(['user_id' => $user_id]);
        }

        return back();
    }

    public function myblogs()
    {
        $sortMode = request('sort_mode', 'desc');
        $search = request('search', '');

        if ($search) {
            $posts = Post::where(['title', 'like', '%' . $search . '%'], ['user_id', Auth::id()]);
        } else {
            $posts = Post::where('user_id', Auth::id());
        }

        $posts = $posts->orderBy('updated_at', $sortMode)->paginate(5)->onEachSide(1);
        $categories = Category::whereHas('posts', function ($query) {
            $query->published();
        })->take(10)->get();


        foreach ($posts as $post) {
            $post->body = $post->getExcerpt();
            $post->readingTime = $post->getReadingTime();
            $post->author = $post->user;
            $post->categories = $post->categories;
            $post->publishedAt = $post->published_at->diffForHumans();
            $post->likes = $post->getLikes();
        }

        return Inertia::render("Blog/myBlogs", [
            'posts' => $posts,
            'queryParams' => request()->query() ?: null,
            'categories' => $categories,
        ]);
    }

    public function destroy(Post $post)
    {
        $post->likes()->delete();
        Comment::where('post_id', $post->id)->delete();
        if ($post->image) {
            Storage::disk('public')->delete($post->image);
        }
        $post->delete();

        return back();
    }

    public function edit(Post $post)
    {
        // dd(new PostResource($post));
        return Inertia(
            'Blog/Edit',
            [
            'article' => $post,
            ]
        );
    }


    public function update(Request $request, Post $post)
    {
        $data = $request->validate(
            [
            'image' => 'nullable|image|max:2048',
            'title' => 'required|max:255',
            'slug' => 'required|max:30',
            'body' => 'required|max:255',
            ]
        );

        if ($request->input('state') == 'published' && $post->state != 'published') {
            $post->state->transitionTo(Published::class);
            $data['published_at'] = now();
        } elseif ($request->input('state') == 'draft' && $post->state != 'draft') {
            $post->state->transitionTo(Draft::class);
        }

        $image = $data['image'] ?? null;
        if ($image) {
            if ($post->image) {
                Storage::disk('public')->delete($post->image);
            }
            $data['image'] = $image->store('post/' . Str::random(), 'public');
        }
        $post->update($data);

        return to_route('post.myblogs');
    }
}
