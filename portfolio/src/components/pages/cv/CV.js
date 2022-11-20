import React from 'react';
import "./cv.css"

export default function About() {

    return (
        <div className='container'>
            <div className='download'>
                <button><a href={require("../../../Assets/File/cv.pdf")} download>Click to download CV</a></button>
            </div>

            <div>
                <h3>Proficiencies</h3>
            </div>

            <div>
                <div className='mb-6'>
                    <h4>Front End</h4>
                    <h6 className='mt-3'>HTML</h6>
                    <h6>CSS</h6>
                    <h6>JavaScript</h6>
                    <h6>Bootstrap</h6>
                    <h6>React</h6>
                    <h6>Responsive design</h6>

                </div>

                <div className='mb-6'>
                    <h4>Back End</h4>
                    <h6 className='mt-3'>NodeJS</h6>
                    <h6>Express</h6>
                    <h6>Model View Controller - MVC</h6>
                    <h6>Progressive Web Applications - PWA</h6>
                    <h6>API's</h6>
                </div>

                <div className='mb-6'>
                    <h4>Database</h4>
                    <h6 className='mt-3'>MySQL</h6>
                    <h6>Sequelize</h6>
                    <h6>NoSQL</h6>
                    <h6>GraphQL</h6>
                    <h6>MongoDB</h6>
                    <h6>Mongoose</h6>
                </div>

                <div>
                    <h4>Dev Tools</h4>
                    <h6 className='mt-3'>Git</h6>
                    <h6>npm</h6>
                    <h6>Jest</h6>
                    <h6>Webpack</h6>

                </div>
            </div>


        </div>

    );
}



