import { Link } from '@inertiajs/react';
import { Heart } from 'lucide-react'
import React from 'react'

const Like = ({ slug, likes }) => {

    return (
        <Link preserveScroll href={route('post.like', slug)} className="d-flex">
            <Heart />
            <span className='ms-2'>{likes}</span>
        </Link>
    )
}

export default Like
