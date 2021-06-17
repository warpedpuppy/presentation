import React from 'react'
import PezBackground from '../components/PezBackground/PezBackground';
import './Section3.css';
export default function Section3() {
    return (
        <div id="section-3-shell">
            <PezBackground />
            <div className="section-3-text">
                <h2>continuing education</h2>
                <ul>
                    <li>job boards</li>
                    <li>mozilla css videos</li>
                    <li>data structures and algorithms</li>
                    <li>big o notation</li>
                </ul>
            </div>
        </div>
    )
}
