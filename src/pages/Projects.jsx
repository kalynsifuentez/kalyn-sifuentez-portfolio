import React from "react";
import projectData from '../documents/projects.json'

export default function Projects() {
  
  return (
    <div className="row">
      {projectData.map((project) => (
        <div className="card" style={{ width: "18rem", margin: "20px" }}>
          <img src={project.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">
             Links
            </p>
            <a href={project.deployed} className="btn btn-primary">
              Go live site
            </a>
            <a href={project.repo} className="btn btn-primary">
              Go to repo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
