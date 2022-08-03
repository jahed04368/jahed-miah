import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';

const projects = {
  newProjects: [
    {
      id: '1',
      desc: `This is a React.js app which records all the To Do's you have on your localStorage. You can also remove, search and hide all the To Do's you have.`,
      projectName: 'To-Do App',
      urllink: 'https://todo-jahed04368.netlify.app/',
      img: 'images/to-do-app/todo-app.jpeg',
    },
    {
      id: '2',
      desc: `This is a React.js app which records all the To Do's you have on your localStorage. You can also remove, search and hide all the To Do's you have.`,
      projectName: 'Hang Man Game',
      urllink: 'https://hangman-jahed04368.netlify.app/',
      img: 'images/hangman-game/hangman-game.jpeg',
    },
    {
      id: '3',
      desc: `This is a React.js app which records all the To Do's you have on your localStorage. You can also remove, search and hide all the To Do's you have.`,
      projectName: 'Notes App',
      urllink: 'https://notes-app-jahed04368.netlify.app/',
      img: 'images/notes-app/notes-app.jpeg',
    },
  ],
  oldProjects: [
    {
      id: '1',
      desc: `This is a React.js app which records all the To Do's you have on your localStorage. You can also remove, search and hide all the To Do's you have.`,
      projectName: 'Dice Game App',
      urllink: 'https://jahed04368.github.io/dicee-game/',
      img: 'images/dice-game/dice-game.jpeg',
    },
    {
      id: '1',
      desc: `This is a React.js app which records all the To Do's you have on your localStorage. You can also remove, search and hide all the To Do's you have.`,
      projectName: 'Drum Kit App',
      urllink: 'https://jahed04368.github.io/drum-kit/',
      img: 'images/drum-kit/drum-kit.jpeg',
    },
    {
      id: '1',
      desc: `This is a React.js app which records all the To Do's you have on your localStorage. You can also remove, search and hide all the To Do's you have.`,
      projectName: 'Simon Game',
      urllink: 'https://jahed04368.github.io/simon-game/',
      img: 'images/simon-game/simon-game.jpeg',
    },
  ],
};

const Projects = () => {
  const { newProjects } = projects;
  const { oldProjects } = projects;
  console.log(newProjects);
  return (
    <div className="bg-slate-700">
      <Navbar />
      <div className="container flex flex-wrap justify-center items-center mx-auto px-2 py-10 lg:pt-20">
        <h1 className="text-3xl text-white pb-2">
          {
            "Here are few projects I've worked on using NODE.JS, EXPRESS.JS. NEXT.js and REACT"
          }
        </h1>

        {newProjects.map((project) => {
          console.log(project);
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
        <h1 className="text-3xl text-white pb-2">
          {"Here are few projects I've worked on using JS, CSS and HTML"}
        </h1>

        {oldProjects.map((project) => {
          console.log(project);
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
