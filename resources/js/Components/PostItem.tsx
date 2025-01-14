import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Heart } from 'lucide-react';
import { Link, router, usePage } from '@inertiajs/react';
import Category from './Category';
import Like from './LikeButton';
import Avatar from './Avatar';
import { User } from './User';
import { User as UserT, CategoryT } from '@/types';

interface Props {
    userItem: boolean,
    likes: number,
    categories: CategoryT[],
    author: UserT,
    img: string,
    readingTime: number,
    body: string,
    publishedAt: string,
    slug: string,
    title: string,
    state: string,
}

const PostComponent = ({ userItem = false, state = 'published', likes, categories, author, slug, title, img, readingTime, body, publishedAt }: Props) => {

    const removePost = (): void => {
        if (window.confirm('Are you sure you want to remove this post?')) {
            router.delete(route('post.destroy', slug));
        }
        return;
    };
    return (
        <Card className='d-block d-lg-flex w-full flex-row border-0'>
            <Card.Header className="me-3 border-0 bg-transparent p-0" style={{ maxWidth: '300px' }}>
                <img src={img} className='rounded-5' />
            </Card.Header>
            <Card.Body className=''>
                <div className="d-flex">
                    <User author={author} />
                    <span className='ms-5'>{publishedAt}</span>
                </div>
                <Link href={route('post.show', slug)} className='h3'>{title}</Link>
                <p className='mt-2'>{body}</p>

                <Card.Footer className=' bg-transparent '>
                    <div className="">
                        {categories.map((category, index) => (
                            <Category text_color={category.text_color} bg_color={category.bg_color} title={category.title} />
                        ))}
                    </div>
                    <div className=" d-flex justify-content-between">
                        <p style={{ whiteSpace: 'pre-line' }}>{readingTime} min read</p>
                        {usePage().props.auth.user ? (
                            <Like slug={slug} likes={likes} />
                        ) : (
                            <Like slug={slug} likes={likes} style={{ pointerEvents: 'none' }} />
                        )}
                    </div>
                    {userItem ? (<>
                        {state && <p className='text-muted mt-2'>{state}</p>}
                        <Button variant="danger" onClick={removePost}>Delete</Button>
                        <Link href={route('post.edit', slug)} className="btn btn-success ms-3">Edit</Link>
                    </>) : <></>}
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default PostComponent
