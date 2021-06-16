import React from 'react'
import FishBackground from '../components/FishBackground/FishBackground';
export default function Section5() {
    return (
        <div>
             <FishBackground />
            <h2>practices that took me too long to incorporate</h2>
            <ul>
                <li>If you have a huge script and a piece of it doesn’t work</li>
                <li>Always be thinking mutation (arrays, ++)</li>
                <li>Reverse engineering (bootstrap, jquery)</li>
                <li>If you are completely stuck:
                    <ul>
                        <li>bring it back to a moment where it worked and build it back piece by piece. </li>
                        <li>If need be, start from scratch and rebuild slowly</li>
                    </ul>
                </li>
                <li>Github --
                    <ul>
                    <li>If you have to do something complicated with github (reversions for example) and you are not comfortable with this:
Make a dummy repo that mirrors the structure of your project</li>
<li>If you have to do something complicated with github (reversions for example) and you are not comfortable with this:
Make a dummy repo that mirrors the structure of your project</li>
Test, test, test on the dummy repo 
                    </ul>

                </li>
                <li>When coding a complicated problem -- never underestimate a calm mental state
                Everyone I know has to fight the instinct to just start throwing answers at questions
                “Maybe I’ll try this, maybe I’ll try this, maybe I’ll try this”
                Very common with css
                This almost never works out to be an efficient use of time 
                Even if this works, you may not understand why it works
                </li>
                <li>Ghosts in the machine
                99% of the time there is a logical code-based reason why something is going wrong BUT corrupted files do exist.
                So never start with the assumption that there is a ghost in the machine.  But always remember that it is a possibility.
                </li>
                <li>Never forget the fun (SPECIAL ANIMATION HERE) </li>
            </ul>
        </div>
    )
}
