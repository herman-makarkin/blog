import React from 'react'

const Category = ({ text_color, title, bg_color }) => {
    return (
        <button style={{ color: text_color, backgroundColor: bg_color }} className='me-3 rounded-3 mb-2 pb-1 pt-1 ps-2 pe-2'>{title}</button>
    )
}

export default Category
