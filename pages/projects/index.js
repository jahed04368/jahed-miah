import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';

const Projects = ({ newProjects, oldProjects }) => {
  return (
    <div className="bg-slate-700">
      <Navbar />
      <div className="container flex flex-wrap justify-center items-center mx-auto px-2 py-10 lg:pt-20">
        <h1 className="text-3xl text-white pb-2">
          {'NODE.JS, EXPRESS.JS, NEXT.JS and REACT.JS'}
        </h1>
        {newProjects.map((project) => {
          {
            {
              return (
                <ProjectCard
                  key={project.id}
                  desc={project.desc}
                  projectName={project.projectName}
                  urllink={project.urllink}
                  img={project.img}
                />
              );
            }
          }
        })}
      </div>
      <div className="container flex flex-wrap justify-center items-center mx-auto px-2 py-10 lg:pt-20">
        <h1 className="text-3xl text-white pb-2">{'JS, CSS and HTML'}</h1>
        {oldProjects.map((project) => {
          {
            {
              return (
                <ProjectCard
                  key={project.id}
                  desc={project.desc}
                  projectName={project.projectName}
                  urllink={project.urllink}
                  img={project.img}
                />
              );
            }
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

export async function getStaticProps() {
  const res = await fetch('https://jsonkeeper.com/b/PQAU');
  const { newProjects, oldProjects } = await res.json();

  return {
    props: {
      newProjects,
      oldProjects,
    },
  };
}
