import React from 'react'
import FishBackground from '../components/FishBackground/FishBackground';
import './Section.css';
export default function Section5() {
    return (
        <div className="section-shell">
             <FishBackground />
             <div className="section-short-text  center">
            <h2>practices that took me too long to incorporate</h2>
            <ul>
                <li>when working in a huge application. . . . </li>
                <li>Keep your eye on mutations. . . . </li>
                <li>Do you know what 'this' currently is? </li>
                <li>Keep your eye on "this". . . . </li>
                <li>Reverse engineering is fair game!</li>
                <li>Honor your artists!</li>
                <li>When completely stuck. . . . </li>
                <li>Github. . .</li>
                <li>Avoid solution spewing. . .</li>
                <li>Ghosts in the machine. . . </li>
            </ul>
            </div>
        </div>
    )
}
