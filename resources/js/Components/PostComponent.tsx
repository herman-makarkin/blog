import React from 'react'
import { Card } from 'react-bootstrap'
import Category from './Category'
import { category } from '@/props'
import { Link } from '@inertiajs/react'

const PostComponent = ({ title, img, description, slug, publishedAt, categories }:
    { categories: category[], publishedAt: string, slug: string, title: string, img: string, description: string }) => {
    return (
        <Card className='w-full min-width-300'>
            <Card.Img variant="top" src={img} />
            <Card.Body >
                <Link href={route('post.show', slug)} className='h3'>{title}</Link>
                <Card.Text>{description}</Card.Text>
                <div className="">
                    {categories.map((category, index) => (
                        <Category text_color={category.text_color} bg_color={category.bg_color} title={category.title} />
                    ))}
                </div>
            </Card.Body>
            <Card.Footer className='text-muted'>{publishedAt}</Card.Footer>
        </Card>
    )
}

export default PostComponent
