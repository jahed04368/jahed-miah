import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Projects = () => {
  return (
    <div className="bg-slate-700">
      <Navbar />
      <div className="text-white container flex flex-wrap justify-center items-center mx-auto px-2 py-10 lg:pt-20">
        <h1 className="text-3xl">{"Here are few projects I've worked on."}</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
