// import React from 'react'
import './Welcome.css'
export default function Welcome() {
    return (
        <div id="welcome">
            <div className="lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="welcome-header">
                <h1>welcome!</h1>
             
            </div>
            <div className="welcome-text">
                    <blockquote>Aren&apos;t you worried all those graphics will distract from the content?</blockquote>
                    <cite>my mother, concerned</cite>
                    <blockquote>The graphics, and how they were built, are a second tier of content!</blockquote>
                    <cite>me, justifiying</cite>
            </div>
        </div>
    )
}
