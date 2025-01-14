import React from 'react'
import Avatar from './Avatar'

const AvatarComponent = ({ image }: { image: string }) => {
    return (
        <>
            {
                image ? <img className='rounded-circle' src={image} style={{ maxWidth: "50px", maxHeight: "50px" }} alt="" />
                    : <Avatar style={{ width: 40, height: 40 }} />
            }
        </>
    )
}

export default AvatarComponent
