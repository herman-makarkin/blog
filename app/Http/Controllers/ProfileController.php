<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());
        $data = $request->user();
        $image = $data['image'] ?? null;

        if ($image) {
            if (Auth::user()->image) {
                Storage::disk('public')->delete(Auth::user()->image);
            }
            $data['image'] = $image->store('project/' . Str::random(), 'public');
        }

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }
        //
        // $user->update($data);
        $request->user()->save();
        dump($request->user());

        return back();
    }

    public function updateAvatar(Request $request): RedirectResponse
    {
        if (Auth::user()->image) {
            Storage::disk('public')->delete(Auth::user()->image);
        }
        $request->validate([
            'image' => 'nullable|image|max:2048',
        ]);
        $image = $request->image ? $request->image->store('user/' . Str::random(), 'public') : null;

        $request->user()->image = $image;

        $request->user()->save();
        dd($request->user());


        return back();
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
