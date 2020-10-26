import React from 'react'

export default function Scroll(props) {
    return (
        <div style={{overflowY:'scroll', height:'500px', border:'solid black 3px'}}>
            {props.children}
        </div>
    )
}
