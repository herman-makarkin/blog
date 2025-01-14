<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class PostFactory extends Factory
{
    public function randomImage()
    {
        $x = rand(0, 10);

        $images = [
            "https://www.pixelstalk.net/wp-content/uploads/2016/07/Beautiful-Full-HD-Images.jpg",
            "https://i0.wp.com/getwallpapers.com/wallpaper/full/b/c/d/257781.jpg",
            "http://s1.picswalls.com/wallpapers/2016/03/29/beautiful-nature-high-definition_042323787_304.jpg",
            "http://thewowstyle.com/wp-content/uploads/2015/02/20-stunning-landscape-photography-stumbleupon-1.jpg",
            "https://www.pixelstalk.net/wp-content/uploads/2016/07/Beautiful-Full-HD-Images.jpg",
            "https://www.hdwallpaper.nu/wp-content/uploads/2015/06/1843513.jpg",
            "https://cdn.wallpapersafari.com/25/19/1nTE73.jpg",
            "http://eskipaper.com/images/beautiful-8.jpg",
            "https://digital-photography-school.com/wp-content/uploads/2018/10/bluebells,_oxfordshire.jpg",
            "http://allpicts.in/wp-content/uploads/2015/07/Beautiful-Nature-Wallpaper-with-Two-Lotus-Flowers-in-Pink.jpg",
            "https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Best-nd-Beautiful-Images.jpg",
        ];

        return $images[$x];
    }
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'title' => $this->faker->sentence(),
            'slug' => $this->faker->slug(3),
            // 'image' => $this->faker->imageUrl(),
            'image' => $this->randomImage(),
            'body' => $this->faker->paragraph(10),
            'published_at' => $this->faker->dateTimeBetween('-2 weeks', 'now'),
            'state' => 'published',
            'featured' => $this->faker->boolean(10),
        ];
    }
}
