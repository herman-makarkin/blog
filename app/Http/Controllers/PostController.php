<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
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
        }

        return Inertia::render("Blog/Index", [
            'posts' => $posts,
            'queryParams' => request()->query() ?: null,
            'categories' => $categories,
        ]);
    }

    public function show(Post $post)
    {
        return Inertia::render("Blog/Show", [
            'post' => $post,
        ]);
    }
}
