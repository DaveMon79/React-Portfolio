import React from 'react';

const Porfolio = (props) => {

    const projects = props.projectList

    return (
        <div>
            {projects.map((project) => (
            <div>
                <img src={project.image} alt={ project.name } />
                <div>
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




