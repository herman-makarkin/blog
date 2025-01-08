import React from 'react'
import { Card } from 'react-bootstrap'
import { User } from './User'

const Comment = ({ comment }) => {
    return (
        <Card className='mt-2'>
            <Card.Body>
                {/* <div className="d-flex flex-start align-items-center"> */}
                {/*     <img className="rounded-circle shadow-1-strong me-3" */}
                {/*         src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="60" */}
                {/*         height="60" /> */}
                {/*     <div> */}
                {/*         <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6> */}
                {/*         <p className="text-muted small mb-0"> */}
                {/*             Shared publicly - Jan 2020 */}
                {/*         </p> */}
                {/*     </div> */}
                {/* </div> */}
                <User author={comment.author}></User>

                <p className="mt-3 mb-2 pb-2">
                    {comment.body}
                </p>
            </Card.Body>
            <Card.Footer>
                <p className='m-0'>{comment.publishedAt}</p>

                {/* <div className="small d-flex justify-content-start"> */}
                {/*     <a href="#!" className="d-flex align-items-center me-3"> */}
                {/*         <i className="far fa-thumbs-up me-2"></i> */}
                {/*         <p className="mb-0">Like</p> */}
                {/*     </a> */}
                {/*     <a href="#!" className="d-flex align-items-center me-3"> */}
                {/*         <i className="far fa-comment-dots me-2"></i> */}
                {/*         <p className="mb-0">Comment</p> */}
                {/*     </a> */}
                {/*     <a href="#!" className="d-flex align-items-center me-3"> */}
                {/*         <i className="fas fa-share me-2"></i> */}
                {/*         <p className="mb-0">Share</p> */}
                {/*     </a> */}
                {/* </div> */}
            </Card.Footer>
        </Card>
    )
}

export default Comment
