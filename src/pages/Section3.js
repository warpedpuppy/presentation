import React from 'react'
import CandyBackground from '../components/candyBackground/CandyBackground';
import './Section.css';
export default function Section3() {
    return (
        <div id="section-shell">
            <CandyBackground />
            <div className="section-short-text section-bottom">
                <h2>continuing education</h2>
                <ul>
                    <li>job boards</li>
                    <li>mozilla css videos</li>
                    <li>this can be an opportunity!</li>
                </ul>
            </div>
        </div>
    )
}
