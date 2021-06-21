import React from 'react'
import './Section.css';
import MazeSolver from '../components/MazeSolver/MazeSolver'
export default function Section1() {
    return (
        <div className="section-shell">
            <div className="section-short-text section-top-left">
            <h2>coding challenges</h2>
            <ul>
                <li>your resume, portfolio get you through the door, but it is your performance in the challenges that get you the job.</li>
                <li>psychology during the challenge
                    <ul>
                        <li>show your work</li>
                        <li>be calm -- show them that you are a delight</li>
                        <li>explain your thought process</li>
                    </ul>
                </li>
                <li>practice, practice, practice. even when employed</li>
                <li>case study: maze solver for Argentine company.</li>
            </ul>
            </div>
            <MazeSolver />
        </div>
    )
}