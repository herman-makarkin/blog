import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Heart } from 'lucide-react';

const PostComponent = ({ title, img, readingTime, author, body, publishedAt }:
    { publishedAt: string, readingTime: number, title: string, img: string, body: string }) => {
    return (
        // <div className="d-flex w-full">
        <Card className='d-flex w-full flex-row bg-transparent border-0'>
            <Card.Header className="me-3 border-0" style={{ maxWidth: '300px' }}>
                <img src={img} className='rounded-5' />
            </Card.Header>
            <Card.Body className=''>
                <div className="author">
                    <p className="">{publishedAt}</p>
                </div>
                <h3>{title}</h3>
                <p>{body}</p>

                <Card.Footer className='pt-3 d-flex justify-content-between'>
                    <p>{readingTime} min read</p>
                    <button className="d-flex">
                        <Heart />
                        <span className='ms-2'>0</span>
                    </button>
                </Card.Footer>
            </Card.Body>
            {/* </div> */}
        </Card>
    )
}

export default PostComponent
