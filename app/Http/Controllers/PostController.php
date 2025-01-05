<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $sortMode = request('sort_mode', 'desc');
        $posts = Post::query()->published()->orderBy('published_at', $sortMode)->paginate(5)->onEachSide(1);

        foreach ($posts as $post) {
            $post->body = $post->getExcerpt();
            $post->readingTime = $post->getReadingTime();
            $post->author = $post->author();
            $post->publishedAt = $post->published_at->diffForHumans();
        }

        return Inertia::render("Blog/Index", [
            'posts' => $posts,
            'queryParams' => request()->query() ?: null,
        ]);
    }
}
