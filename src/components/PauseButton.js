import React from 'react'
import './PauseButton.css'
export default function PauseButton(props) {
    return (
        <button onClick={props.buttonHandler.pause.bind(props.buttonHandler)} className='pause-button'>&#9208;</button>
    )
}
