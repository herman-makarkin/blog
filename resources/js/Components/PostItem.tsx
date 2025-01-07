import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Heart } from 'lucide-react';
import { Link } from '@inertiajs/react';

const PostComponent = ({ authorName, slug, title, img, readingTime, body, publishedAt }:
    { publishedAt: string, readingTime: number, title: string, img: string, body: string }) => {
    return (
        <Card className='d-flex w-full flex-row bg-transparent border-0'>
            <Card.Header className="me-3 border-0" style={{ maxWidth: '300px' }}>
                <img src={img} className='rounded-5' />
            </Card.Header>
            <Card.Body className=''>
                <div className="author">
                    <p>{authorName} <span className='ms-5'>{publishedAt}</span></p>
                </div>
                <Link href={route('post.show', slug)} className='h3'>{title}</Link>
                <p className='mt-3'>{body}</p>

                <Card.Footer className='pt-3 d-flex justify-content-between'>
                    <p>{readingTime} min read</p>
                    <button className="d-flex">
                        <Heart />
                        <span className='ms-2'>0</span>
                    </button>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default PostComponent
