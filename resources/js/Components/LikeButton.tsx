import { Link } from '@inertiajs/react';
import { Heart } from 'lucide-react'
import React from 'react'

const Like = ({ slug, likes, ...rest }: {
    slug: string,
    likes: number,
}) => {

    return (
        <Link preserveScroll href={route('post.like', slug)} className="d-flex" {...rest}>
            <Heart />
            <span className='ms-2'>{likes}</span>
        </Link>
    )
}

export default Like
