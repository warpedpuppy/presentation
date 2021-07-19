import React from 'react'
import './Section.css';
import DangerLand from '../components/dangerLand/DangerLand';
export default function Section4() {
    return (
        <div className="section-shell">
            <div className="section-short-text section-top-right danger-land">
                <h2>and <span id="wiggle-now">now</span> a warning?</h2>
                <ul>
                    <li>be skeptical</li>
                    <li>scamming you, scamming others using you, hustlers</li>
                    <li>please don't ever work for free.</li>
                </ul>
            </div>
            <DangerLand />
        </div>
    )
}
