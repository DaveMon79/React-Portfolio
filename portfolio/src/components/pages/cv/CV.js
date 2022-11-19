import React from 'react';
import "./cv.css"

export default function About() {

    return (
        <div className='container'>
            <div className='download'>
                <h5><a href='./'>Click to download CV</a></h5>
            </div>

            <div className='proficiencies'>
                <div>
                    <h5>Proficiencies</h5>
                </div>
                <div>
                    <ul className='cvList'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>react</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}