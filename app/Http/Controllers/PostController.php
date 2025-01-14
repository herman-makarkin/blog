<?php
/**
 * My incredible blog site
 *
 * PHP version 8.4
 *
 * @category PHP
 * @package  Blog
 * @author   Herman Makarkin <german.makarkin@gmail.com>
 * @license  https://www.gnu.org/licenses/gpl-3.0.en.html#license-text GPL License
 * @link     https://github.com/herman-makarkin/blog
 */

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Comment;
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
use Spatie\QueryBuilder\QueryBuilder;

use function Laravel\Prompts\search;

/**
 * My incredible blog site
 *
 * PHP version 8.4
 *
 * @category PHP
 * @package  Blog
 * @author   Herman Makarkin <german.makarkin@gmail.com>
 * @license  https://www.gnu.org/licenses/gpl-3.0.en.html#license-text GPL License
 * @link     https://github.com/herman-makarkin/blog
 */
class PostController extends Controller
{
    /**
     * This is the main Blog page
     *
     * @return void
     */
    public function index()
    {
        $sortMode = request('sort_mode', 'desc');
        $search = request('search', '');
        $category = request('category', '');

        if ($search) {
            $posts = Post::where('title', 'like', '%' . $search . '%');
        } else {
            $posts = Post::query();
        }

        if ($category) {
            $posts->withCategory($category);
        }

        $posts = $posts->published()
            ->orderBy('published_at', $sortMode)
            ->paginate(5)
            ->onEachSide(1);
        $categories = Category::whereHas(
            'posts',
            function ($query) {
                $query->published();
            }
        )->take(10)->get();


        foreach ($posts as $post) {
            $post->body = $post->getExcerpt();
            $post->readingTime = $post->getReadingTime();
            $post->author = $post->user;
            $post->author->image = $post->author->getAvatarUrl();
            $post->categories = $post->categories;
            $post->publishedAt = $post->published_at->diffForHumans();
            $post->likes = $post->getLikes();
            $post->image = $post->getThumbnailUrl();
        }

        return Inertia::render(
            "Blog/Index",
            [
            'posts' => $posts,
            'queryParams' => request()->query() ?: null,
            'categories' => $categories,
            ]
        );
    }

    /**
     * Show the blog page
     *
     * @param Post $post the post
     *
     * @return void
     */
    public function show(Post $post)
    {
        $post->author = $post->user;
        $post->image = $post->getThumbnailUrl();
        $post->publishedAt = $post->published_at->diffForHumans();
        $post->categories = $post->categories;
        $post->comments = $post->comments;
        $post->likes = $post->getLikes();

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

    /**
     * Create a post
     *
     * @return void
     */
    public function create()
    {
        $categories = Category::all();
        return inertia(
            "Blog/Create",
            [
                'categories' => $categories
            ]
        );
    }

    /**
     * Store a post
     *
     * @param Request $request the request
     *
     * @return void
     */
    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate(
            [
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required|max:255',
            'slug' => 'required|max:30',
            'body' => 'required|max:2000',
            'state' => Rule::in(['published', 'draft']),
            ]
        );

        if ($request->hasFile('image')) {
            $image = $request->image ? $request
                ->image->store('post/' . Str::random(), 'public') : null;
            $data['image'] = $image;
        }

        $data['user_id'] = Auth::id();


        $post = Post::create($data);

        $post->categories()->attach($request->categories);

        return Redirect::to('/myblogs');
    }

    /**
     * Store a comment on post page
     *
     * @param Request $request the request
     * @param Post    $post    is the post
     *
     * @return void
     */
    public function storeComment(Request $request, Post $post): RedirectResponse
    {
        $data = $request->validate(
            [
            'body' => 'required|max:255',
            ]
        );

        $data['user_id'] = Auth::id();
        $data['post_id'] = $post->id;

        $post = Comment::create($data);

        return back();
    }

    /**
     * Leave a like
     *
     * @param Post $post is the post
     *
     * @return void
     */
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

    /**
     * MyBlogs page
     *
     * @return void
     */
    public function myblogs()
    {
        $sortMode = request('sort_mode', 'desc');
        $search = request('search', '');
        $category = request('category', '');
        $state = request('state', '');

        if ($search) {
            $posts = QueryBuilder::for(Post::class)
                ->where('title', 'like', '%' . $search . '%')
                ->where('user_id', Auth::id());
        } else {
            $posts = QueryBuilder::for(Post::class)->where('user_id', Auth::id());
        }
        if ($category) {
            $posts->withCategory($category);
        }

        if ($state) {
            $posts->where('state', $state);
        }

        $posts = $posts
            ->orderBy('updated_at', $sortMode)
            ->paginate(5)->onEachSide(1);
        $categories = Category::whereHas(
            'posts',
            function ($query) {
                $query->published();
            }
        )->take(10)->get();


        foreach ($posts as $post) {
            $post->body = $post->getExcerpt();
            $post->readingTime = $post->getReadingTime();
            $post->author = $post->user;
            $post->author->image = $post->author->getAvatarUrl();
            $post->categories = $post->categories;
            $post->publishedAt = $post->published_at->diffForHumans();
            $post->likes = $post->getLikes();
            $post->image = $post->getThumbnailUrl();
        }

        return Inertia::render(
            "Blog/myBlogs",
            [
            'posts' => $posts,
            'queryParams' => request()->query() ?: null,
            'categories' => $categories,
            ]
        );
    }

    /**
     * Destroy post
     *
     * @param Post $post is the post
     *
     * @return void
     */
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

    /**
     * Edit post
     *
     * @param Post $post is the post
     *
     * @return void
     */
    public function edit(Post $post)
    {
        $categories = Category::all();
        $ids = [];

        for ($x = 0; $x < count($post->categories); $x++) {
            $ids[$x] = $post->categories[$x]->id;
        }

        return Inertia(
            'Blog/Edit',
            [
            'article' => $post,
            'categories' => $categories,
            'catIds' => $ids,
            ]
        );
    }


    /**
     * Update post
     *
     * @param Request $request the request
     * @param Post    $post    is the post
     *
     * @return void
     */
    public function update(Request $request, Post $post)
    {
        $data = $request->validate(
            [
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required|max:255',
            'slug' => 'required|max:30',
            'body' => 'required|max:2000',
            ]
        );

        if ($request->input('state') == 'published' && $post->state != 'published') {
            $post->state->transitionTo(Published::class);
            $data['published_at'] = now();
        } elseif ($request->input('state') == 'draft' && $post->state != 'draft') {
            $post->state->transitionTo(Draft::class);
        }

        $image = $data['image'] ?? null;

        if ($request->hasFile('image')) {
            $image = $request->image ? $request
                ->image->store('post/' . Str::random(), 'public') : null;
            $data['image'] = $image;
        } else {
            unset($data['image']);
        }

        $post->update($data);
        $post->save();

        $post->categories()->detach();
        $post->categories()->attach($request->categories);

        return to_route('post.myblogs');
    }
}
