<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get(
//     '/',
//     function () {
//         return Inertia::render(
//             'Welcome',
//             [
//             'canLogin' => Route::has('login'),
//             'canRegister' => Route::has('register'),
//             'laravelVersion' => Application::VERSION,
//             'phpVersion' => PHP_VERSION,
//             ]
//         );
//     }
// );


Route::middleware([])->group(
    function () {
        Route::get('/', DashboardController::class)->name('dashboard');
        Route::get('/blog', [PostController::class, 'index'])->name('post.index');
        Route::get('/myblogs', [PostController::class, 'myblogs'])->name('post.myblogs');
        Route::get('/blog/{post:slug}', [PostController::class, 'show'])->name('post.show');
        Route::delete('/blog/{post:slug}', [PostController::class, 'destroy'])->name('post.destroy');
        Route::post('/blog/{post:slug}', [PostController::class, 'update'])->name('post.update');
        Route::post('/blog/{post:slug}/comment', [PostController::class, 'storeComment'])->name('post.storeComment');
        Route::get('/blog/{post:slug}/edit', [PostController::class, 'edit'])->name('post.edit');
        Route::get('/blogCreate', [PostController::class, 'create'])->name('post.create');
        Route::post('/blog', [PostController::class, 'store'])->name('post.store');
        // Route::post('/blog/{post:slug}', [PostController::class, 'store'])->name('post.store');
        Route::get('/blog/{post:slug}/like', [PostController::class, 'like'])->name('post.like');
        Route::get('/blog/{post:slug}/like/{comment:id}', [PostController::class, 'commentLike'])->name('post.commentLike');
        Route::get('/comment/{comment:id}', [CommentController::class, 'like'])->name('comment.like');
    }
);

Route::middleware('auth')->group(
    function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::post('/profile', [ProfileController::class, 'updateAvatar'])->name('profile.updateAvatar');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    }
);

Route::get(
    '/error',
    function () {
        throw new Exception('My first GlitchTip error!');
    }
);

require __DIR__.'/auth.php';
