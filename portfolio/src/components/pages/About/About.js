import React from 'react';
import "./about.css"

export default function About() {
    return (
        <div className='container'>
            <div>
                <h2>About me:</h2>
            </div>

            <div>
                <img src="../images/DaveMonaghan.jpg" alt="Me" width="450px" />
            </div>
            <div>
                <h3>Bio</h3>
                <p>I'm a highly skilled Customer Service Agent who's worked in the industry for the past 26 years. I’m ready and
                    determined to pursue my passion in Web Development.</p>
                <p>I thrive in any working environment, whether it be on my own or part of a team. I’m comfortable delegating or
                    following instructions. I’m highly motivated with an excellent work ethic and willing to make personal sacrifices
                    required to achieve my goals.</p>
                <p>I chose web development because I thoroughly enjoy designing and developing and thrive on improving existing
                    projects. I already have an excellent knowledge of Excel which I learnt in my current role and I see HTML, CSS
                    and Javascript as the next step in my computing career.</p>

                <h3>Personal life</h3>
                <p>I’m 43 years old and live in Manchester. I’m fun, outgoing, sociable, I love to live life to full and laugh
                    as much as possible. My interests include comedy clubs, pubs, holidays, gym, cooking, music, gigs, movies &
                    boxsets and sports.</p>
            </div>
        </div>

    );
}