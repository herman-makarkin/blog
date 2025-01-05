import React from 'react'

const Tab = ({ sort_mode, sortChanged, mode, text }) => {
    let tabStyle = '';
    if (sort_mode === mode) {
        tabStyle = 'nav-link active';
    } else {
        tabStyle = 'nav-link'
    }

    return (
        <a className={tabStyle} onClick={() => sortChanged(mode)}>{text}</a>
    )
}

export default Tab
