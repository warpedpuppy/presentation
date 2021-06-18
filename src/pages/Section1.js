import React from 'react';
import Frustration from '../components/frustrationAnimation/Frustration';
import './Section.css';
export default function Section1() {
    return (
        <div className="section-shell">
        <div className="section-short-text">
            <h2>psychology of the industry</h2>
            <ul>
                <li>enjoy the ride</li>
                <li>parallel techs</li>
                <li>substantive v procedural</li>
                <li>hospitality level customer service</li>
            </ul>
        </div>
             <Frustration />
        </div>
    )
}
