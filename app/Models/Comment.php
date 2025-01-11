<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Comment extends Model
{
    //
    protected $fillable = [
        'body',
        'user_id',
        'post_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function likes(): MorphMany
    {
        return $this->morphMany(Like::class, 'likeable');
    }

    public function getLikes()
    {
        return $this->likes()->count();
    }

    public function hasLiked(Comment $comment, int $user_id)
    {
        return $this->likes()->where([['likeable_id', $this->id], ['user_id', $user_id]])->exists();
    }
}
