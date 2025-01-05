<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $posts = Post::query()->published()->orderBy('published_at', 'desc')->paginate(5)->onEachSide(1);

        foreach ($posts as $post) {
            $post->body = $post->getExcerpt();
            $post->readingTime = $post->getReadingTime();
            $post->author = $post->author();
            $post->publishedAt = $post->published_at->diffForHumans();
        }

        return Inertia::render("Blog/Index", [
            'posts' => $posts,
        ]);
    }
}
