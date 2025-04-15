import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectList = [
  { title: 'CineMate App', description: 'A movie app for streaming anywhere-anytime', link: 'https://www.figma.com/proto/FhyhNpcSLcq0JvL6mLxrBv/Shaheena-Midterm-Movie-app?page-id=36%3A113&node-id=43-218&p=f&viewport=-105%2C595%2C0.37&t=2QygOxNEpAkaaBCb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=43%3A218&show-proto-sidebar=1' },
  { title: 'SplitTrip App', description: '' },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My UI Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;