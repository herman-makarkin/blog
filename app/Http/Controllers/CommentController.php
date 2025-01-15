<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    //
    public function like(Comment $comment)
    {
        $user_id = Auth::id();
        if (!$user_id) {
            return back();
        }

        if ($comment->hasLiked($comment, $user_id)) {
            $comment->likes()->where('user_id', $user_id)->delete();
        } else {
            $comment->likes()->create(['user_id' => $user_id]);
        }

        return back();
    }
}
