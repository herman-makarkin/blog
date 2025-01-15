import { Link } from '@inertiajs/react';
import { Heart } from 'lucide-react'
import React from 'react'

const CommentLike = ({ slug, likes, commentId = 0, ...rest }: {
    slug: string,
    likes: number,
    commentId: number
}) => {

    return (
        <Link preserveScroll href={route('comment.like', commentId)} className="d-flex"  {...rest} >
            <Heart />
            <span className='ms-2'>{likes}</span>
        </Link>
    )
}

export default CommentLike
