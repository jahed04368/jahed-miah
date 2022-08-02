import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    id: '1',
    desc: `This is a React.js app which records all the To Do's you have on your localStorage. You can also remove, search and hide all the To Do's you have.`,
    projectName: 'To-Do App',
    urllink: 'https://todo-jahed04368.netlify.app/',
  },
  {
    id: '2',
    desc: `This is a React.js app which records all the To Do's you have on your localStorage. You can also remove, search and hide all the To Do's you have.`,
    projectName: 'To-Do App',
    urllink: 'https://todo-jahed04368.netlify.app/',
  },
];

const Projects = () => {
  return (
    <div className="bg-slate-700">
      <Navbar />
      <div className=" container flex flex-wrap justify-center items-center mx-auto px-2 py-10 lg:pt-20">
        <h1 className="text-3xl text-white pb-2">
          {"Here are few projects I've worked on."}
        </h1>

        {projects.map((project) => {
          console.log(project);
          {
            return (
              <ProjectCard
                key={project.id}
                desc={project.desc}
                projectName={project.projectName}
                urllink={project.urllink}
              />
            );
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
