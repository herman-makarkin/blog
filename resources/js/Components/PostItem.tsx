import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Heart } from 'lucide-react';
import { Link } from '@inertiajs/react';
import Category from './Category';
import Like from './LikeButton';
import Avatar from './Avatar';
import { User } from './User';

const PostComponent = ({ categories, author, slug, title, img, readingTime, body, publishedAt }:
    { publishedAt: string, readingTime: number, title: string, img: string, body: string }) => {
    return (
        <Card className='d-flex w-full flex-row bg-transparent border-0'>
            <Card.Header className="me-3 border-0" style={{ maxWidth: '300px' }}>
                <img src={img} className='rounded-5' />
            </Card.Header>
            <Card.Body className=''>
                <div className="d-flex">
                    <User author={author} />
                    <span className='ms-5'>{publishedAt}</span>
                </div>
                <Link href={route('post.show', slug)} className='h3'>{title}</Link>
                <p className='mt-2'>{body}</p>

                <Card.Footer className=''>
                    <div className="">
                        {categories.map((category, index) => (
                            <Category text_color={category.text_color} bg_color={category.bg_color} title={category.title} />
                        ))}
                    </div>
                    <div className=" d-flex justify-content-between">
                        <p>{readingTime} min read</p>
                        <Like />
                    </div>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default PostComponent
