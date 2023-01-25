import React from 'react';

// Project card function which maps the project list arrray from projectList.js
const Porfolio = (props) => {

    const projects = props.projectList

    return (
        <div className="cardContainer p-5 mb-5 d-flex flex-wrap ">
            {projects.map((project) => (
          <div className="card col-lg-3 col-md-3 col-sm-5 col-10 m-5">
          <img style={{height:"25vh"}} src={project.image} class="card-img-top" alt={ project.name }/>
          <div style={{height:"35vh"}} className="card-body text-center ">
            <div className="d-inline-flex">
            <a href={project.github} className=" btn btn-primary me-4 mt-2">Git Hub</a>
            <a href={project.liveURL} className="btn btn-primary mt-2">Live URL</a>
            </div>
            <h5 className="card-title text-center mt-3">{project.name}</h5>
            <p className="card-text mb-3">{project.description}</p>
          </div>
        </div>
             ))}
        </div>
       

    )
}

export default Porfolio

