import React from 'react'
import FishBackground from '../components/FishBackground/FishBackground';
import './Section.css';
export default function Section5() {

    function expandContent(){
        let et = document.getElementById('extra-time')
        if (et.classList.contains('expanded')) {
            et.classList.remove('expanded')
        } else {
            et.classList.add('expanded')
        }
    }
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
                <li>never do not include steps for replication when asking for help. . . </li>
                <li>when working in a huge application. . . .</li>
                <li>Reverse engineering is fair game!</li>
                <li>Honor your artists!</li>
                <li>When completely stuck. . . . </li>
                <li>Github. . .</li>
                <li>Avoid solution spewing. . .</li>
                <li>Fear not the logs or the error message. . .</li>
                <li>Identify guesses as guesses. . .</li>
                <li>"I don't know" is trait of maturity. . . </li>
                <li>Ghosts in the machine. . . </li>
                <li><span className="extra-time-trigger" onClick={ expandContent }>Extra time?</span>
                    <ul id="extra-time">
                        <li>consider making a console log function that is dependent on a boolean. . . </li>
                        <li>Remember OG metatags</li>
                        <li>
                            really common coding errors:
                            <ul>
                                <li>Keep your eye on mutations. . . . </li>
                                <li>Keep your eye on "this". . . . </li>
                            </ul>
                        </li>
                        <li>
                            sometimes code can behave unexpectedly:
                            <ul>
                                <li>When is 'not a number' not 'not a number'?</li>
                                <li>Make sure you understand the shorthand you're using. . . . </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
    )
}
