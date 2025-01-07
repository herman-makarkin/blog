import { Heart } from 'lucide-react'
import React from 'react'

const Like = () => {
    return (
        <button className="d-flex">
            <Heart />
            <span className='ms-2'>0</span>
        </button>
    )
}

export default Like
