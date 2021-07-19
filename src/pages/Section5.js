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
                <li>NEVER show client unfinished work. . . . </li>
                <li>tack % onto estimates. . . </li>
                <li>consider doing css first for client happiness. . . </li>
                <li>don't underbill in an attempt to impress clients -- you will have set up false expectations for future work.</li>
                <li>consider making a console log function that is dependent on a boolean. . . </li>
                <li>never do not include steps for replication when asking for help. . . </li>
                <li>when working in a huge application. . . .</li>
                <li>Keep your eye on mutations. . . . </li>
                <li>Keep your eye on "this". . . . </li>
                <li>Reverse engineering is fair game!</li>
                <li>Honor your artists!</li>
                <li>When completely stuck. . . . </li>
                <li>Github. . .</li>
                <li>Avoid solution spewing. . .</li>
                <li>Fear not the logs or the error message. . .</li>
                <li>Ghosts in the machine. . . </li>
                <li>if you are guessing, make sure you identify your response as a guess and explain why you think it is a logical possibility. But also maybe just say "I don't know"</li>
            </ul>
            </div>
        </div>
    )
}
