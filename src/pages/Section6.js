import React from 'react'
import Fireworks from '../components/fireworks/Fireworks';
export default function Section4() {
    return (

        <div className="section-shell">
        <Fireworks />
        <div className="section-short-text center">
            <div>
            <h2>Bonus</h2>
            <ul>
                <li>
                    Toughest interview questions:
                    <ul>
                        <li>Write a recursive fibonacci sequence</li>
                        <li>Define restful architecture</li>
                        <li>What are the four principals of OOP</li>
                    </ul>
                </li>
                <li>go shallower: 
                    <ul>
                        <li>CMSs</li>
                    </ul>
                </li>
                <li>go deeper: 
                    <ul>
                        <li>Object pooling</li>
                        <li>Recursive functions</li>
                        <li>Permutation</li>
                        <li>Maze Handling</li>
                        <li>Big “O” notation</li>
                        <li>Sorting Algorithms</li>
                        <li>Searching Algorithms</li>
                        <li>Stacks, queues</li>
                        <li>Hash maps</li>
                        <li>coding your own tweening engine</li>
                    </ul>
                </li>
                <li>final note: 
                    <ul>
                        <li>smart enough in the moment -- geodesic dome emulator</li>
                        <li>remember your self-presentation</li>
                    </ul>
                </li>
            </ul>
            </div>
            </div>
        </div>
    )
}
