import React from 'react'
import { Card } from 'react-bootstrap'

const PostComponent = ({ title, img, description, publishedAt }: { publishedAt: string, title: string, img: string, description: string }) => {
    return (
        <Card className='w-full min-width-300'>
            <Card.Img variant="top" src={img} />
            <Card.Body >
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Link>category</Card.Link>
            </Card.Body>
            <Card.Footer className='text-muted'>{publishedAt}</Card.Footer>
        </Card>
    )
}

export default PostComponent
