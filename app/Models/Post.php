<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Spatie\ModelStates\HasStates;
use App\States\Post\PostState;

class Post extends Model
{
    //
    use HasFactory;
    use HasStates;

    protected $casts = [
        'published_at' => 'datetime',
        'state' => PostState::class,
    ];

    protected $fillable = [
        'body',
        'title',
        'slug',
        'image',
        'user_id',
        'state',
    ];


    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopePublished($query)
    {
        $query->where('state', 'published');
    }

    public function scopeFeatured($query)
    {
        $query->where('featured', true);
    }

    public function scopeWithCategory($query, string $category)
    {
        $query->whereHas(
            'categories',
            function ($query) use ($category) {
                $query->where('slug', $category);
            }
        );
    }

    public function getExcerpt()
    {
        return Str::limit(strip_tags($this->body), 150);
    }

    public function getReadingTime()
    {
        $averageReadingSpeed = 250;
        $minutes = round(str_word_count($this->body) / $averageReadingSpeed);

        return ($minutes < 1) ? 1 : $minutes;
    }

    public function hasLiked(Post $post, int $user_id)
    {
        return $this->likes()->where([['likeable_id', $this->id], ['user_id', $user_id]])->exists();
    }

    public function getThumbnailUrl()
    {
        if (str_contains($this->image, 'http')) {
            return $this->image;
        } elseif ($this->image) {
            return Storage::url($this->image);
        }

        return '';
    }


    public function likes(): MorphMany
    {
        return $this->morphMany(Like::class, 'likeable');
    }

    public function getLikes()
    {
        return $this->likes()->count();
    }
}
