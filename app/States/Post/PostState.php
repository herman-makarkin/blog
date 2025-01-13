<?php

namespace App\States\Post;

use Spatie\ModelStates\Exceptions\InvalidConfig;
use Spatie\ModelStates\State;
use Spatie\ModelStates\StateConfig;

abstract class PostState extends State
{
    /**
     * This is the config for Post states
     *
     * @return StateConfig
     * @throws InvalidConfig
     */
    public static function config(): StateConfig
    {
        return parent::config()
            ->default(Draft::class) // default saving state
            ->allowTransition(Draft::class, Published::class) // allows transition from draft to published
            ->allowTransition(Published::class, Draft::class); // allows transition from published to draft
    }
}
