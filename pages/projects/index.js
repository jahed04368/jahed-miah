import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';

const Projects = () => {
  return (
    <div className="bg-slate-700">
      <Navbar />
      <div className=" container flex flex-wrap justify-center items-center mx-auto px-2 py-10 lg:pt-20">
        <h1 className="text-3xl text-white pb-2">
          {"Here are few projects I've worked on."}
        </h1>

        <ProjectCard />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
