import React from 'react'
import { Card } from 'react-bootstrap'
import { User } from './User'
import Like from './LikeButton'
import CommentLike from './CommentLike'
import { usePage } from '@inertiajs/react'
import { Comment as CommentT } from '@/types'

const Comment = ({ comment, postSlug }: {
    comment: CommentT,
    postSlug: string,
}) => {
    return (
        <Card className='mt-2'>
            <Card.Body>
                <User author={comment.author}></User>

                <p className="mt-3 mb-2 pb-2">
                    {comment.body}
                </p>
            </Card.Body>
            <Card.Footer>

                <div className="small d-flex justify-content-start">
                    {usePage().props.auth.user ? (
                        <CommentLike slug={postSlug} likes={comment.likes} commentId={comment.id} />
                    ) : (
                        <CommentLike slug={postSlug} likes={comment.likes} commentId={comment.id} style={{ pointerEvents: 'none' }} />
                    )}

                    <p className='m-0 ms-4'>{comment.publishedAt}</p>
                </div>
            </Card.Footer>
        </Card>
    )
}

export default Comment
