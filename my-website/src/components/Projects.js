import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
      });
  }, []);

  return (
    <main className="container mt-5">
      <h2>My Projects</h2>
      <div className="row">
        {projects.map(project => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{project.name}</h3>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;
