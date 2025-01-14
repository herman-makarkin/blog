<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * $request request
     *
     * @return Inertia render
     */
    public function __invoke(Request $request)
    {
        $featuredPosts = Post::published()->featured()->latest('published_at')->take(3)->get();
        $latestPosts = Post::published()->latest('published_at')->take(9)->get();

        foreach ($featuredPosts as $post) {
            $post->body = $post->getExcerpt();
            $post->readingTime = $post->getReadingTime();
            $post->publishedAt = $post->published_at->diffForHumans();
        }

        foreach ($latestPosts as $post) {
            // $post->body = $post->getExcerpt();
            // $post->readingTime = $post->getReadingTime();
            // $post->publishedAt = $post->published_at->diffForHumans();
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
            "Dashboard",
            [

            'featuredPosts' => $featuredPosts,
            'latestPosts' => $latestPosts,

            ]
        );
    }
}
