import React from 'react'
import Avatar from './Avatar'

export const User = ({ author }) => {
    return (
        <div className="d-flex align-items-center mb-2">
            {author.image ?
                <img className='rounded-circle' src={author.image} style={{ maxWidth: "50px", maxHeight: "50px" }} alt="" />
                : <Avatar />
            }
            <p className='m-0 ms-2'>{author.name}</p>
        </div>
    )
}

