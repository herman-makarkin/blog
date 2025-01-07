<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->words(1, true),
            'slug' => $this->faker->slug(3),
            'bg_color' => $this->faker->safeHexColor(),
            'text_color' => $this->faker->safeHexColor(),
        ];
    }
}
