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
        if ($comment->hasLiked($comment)) {
            $comment->likes()->where([['likeable_id', $comment->id], ['user_id', $user_id]])->delete();
        } else {
            $comment->likes()->create(['user_id' => $user_id]);
        }

        return back();
    }
}
