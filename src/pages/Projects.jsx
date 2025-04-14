import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectList = [
  { title: 'CineMate App', description: 'A movie app for streaming anywhere-anytime', link: 'https://www.figma.com/design/FhyhNpcSLcq0JvL6mLxrBv/Shaheena-Midterm-Movie-app?node-id=36-113&t=6xehpAdHwXwyAg0N-1' },
  { title: 'SplitTrip App', description: 'A ride-share and cost-splitting app', link: 'https://www.figma.com/design/7BbZno4bMmA2QoDRVjGcvn/Split-Trip-Final?node-id=1-2&t=SJes0p1gFQdY2stu-1' },
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