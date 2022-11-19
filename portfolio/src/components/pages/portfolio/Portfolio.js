import React from 'react';
import "./portfolio.css"

const Porfolio = (props) => {

    const projects = props.projectList

    return (
        <div className='cardContainer'>
            {projects.map((project) => (
            <div className='card'>
                <img src={project.image} alt={ project.name } />
                <div className='projectTitle'>
                    <h3>{project.name}</h3>
                    <h5><a href={project.github}>Git Hub Repo</a></h5>
                    <h5><a href={project.liveURL}>Live URL</a></h5>
                </div>
            </div>
             ))}
        </div>
       
    )
}

export default Porfolio




