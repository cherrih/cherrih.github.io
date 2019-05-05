import React from 'react';

const MobileProjects = ({ projects }) => {
  return (
    <div className="small-projects-body">
      <h3>Projects</h3>
      <div className="small-projects-container">
        {
          projects.map(project => (
            <div key={project.title} id={`small${project.id || project.title}`}>
              <h4>{project.shortTitle || project.title}</h4>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default MobileProjects;
