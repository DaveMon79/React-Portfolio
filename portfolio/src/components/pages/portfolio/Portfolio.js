import React from 'react';


const Porfolio = (props) => {
console.log(props)
    const projects = props.projectList

    return (
        <div className="cardContainer p-5">
            {projects.map((project) => (
          <div className="card col-md-3 p-2 m-5 col-3 col-xs-10 col-sm-6 d-inline-flex">
          <img src={project.image} class="card-img-top" alt={ project.name }
         />
          <div className="card-body text-center">
            <h5 className="card-title text-center">{project.name}</h5>
            <p className="card-text">{project.description}</p>
           <div className="d-inline-flex ">
            <a href={project.github} className="btn btn-primary me-4 mt-2">Git Hub</a>
            <a href={project.liveURL} className="btn btn-primary mt-2">Live URL</a>
            </div>
          </div>
        </div>
             ))}
        </div>
       

    )
}

export default Porfolio

// src={project.image}
// src={"https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"}