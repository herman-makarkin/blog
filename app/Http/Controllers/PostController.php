<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Comment;
use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

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

        return Inertia::render("Blog/Show", [
            'article' => $post,
        ]);
    }

    public function store(Post $post, Request $request)
    {
        $data = $request->validate([
            'body' => 'required|max:255',
        ]);

        $data['user_id'] = Auth::id();
        $data['post_id'] = $post->id;
        Comment::create($data);

        return back();
    }

    public function like(Post $post)
    {
        $user_id = Auth::id();
        if ($post->hasLiked($post)) {
            $post->likes()->where([['likeable_id', $post->id], ['user_id', $user_id]])->delete();
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
}
