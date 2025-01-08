import React from 'react'
import Avatar from './Avatar'
import AvatarComponent from './AvatarComponent'

export const User = ({ author }) => {
    return (
        <div className="d-flex align-items-center mb-2">
            <AvatarComponent image={author.image} />
            <p className='m-0 ms-3'>{author.name}</p>
        </div>
    )
}

