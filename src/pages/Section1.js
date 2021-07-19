import React from 'react';
import Psychology from '../components/psychologyAnimation/Psychology';
import './Section.css';
export default function Section1() {
    return (
        <div className="section-shell">
            <div className="section-short-text center">
                <h2>psychology of the industry</h2>
                <ul>
                    <li>never fixéd mark, so enjoy the ride</li>
                    <li>concurrent techs</li>
                    <li>substantive v. procedural knowledge</li>
                    <li>hospitality-industry level customer service</li>
                </ul>
            </div>
             <Psychology />
            
        </div>
    )
}
