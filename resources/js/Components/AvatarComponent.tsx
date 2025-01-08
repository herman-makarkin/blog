import React from 'react'
import Avatar from './Avatar'

const AvatarComponent = ({ image }) => {
    return (
        <>
            {
                image ? <img className='rounded-circle' src={image} style={{ maxWidth: "50px", maxHeight: "50px" }} alt="" />
                    : <Avatar />
            }
        </>
    )
}

export default AvatarComponent
