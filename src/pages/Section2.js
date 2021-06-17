import React from 'react'
import './Section.css';
import MazeSolver from '../components/MazeSolver/MazeSolver'
export default function Section1() {
    return (
        <div className="section-shell">
            <div className="section-short-text">
            <h2>coding challenges</h2>
            <ul>
                <li>your resume, portfolio get you through the door</li>
                <li>psychology during the challenge</li>
                <li>practice</li>
                <li>never stop</li>
            </ul>
            </div>
            <MazeSolver />
        </div>
    )
}