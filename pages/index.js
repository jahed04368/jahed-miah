import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { MdOutlineHistoryEdu } from 'react-icons/md';
import { AiOutlineProject, AiOutlineLink, AiOutlineStar } from 'react-icons/ai';
import { FaReact, FaFireAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';
import React, { useState } from 'react';
import NextImage from 'next/image';
import JahedsPic from '../public/images/jahed-pic.png';
import Link from 'next/link';

export default function Home({ about, employments, featuredProject }) {
  const [isExpanded, setExpand] = useState(false);
  const [isTrunicated, setTrunicated] = useState(false);

  const setTrunicatedWrapper = (el) => {
    const trunc = !!(el && el.clientHeight < el.scrollHeight);
    setTrunicated(trunc);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <Navbar />
      <div className="text-white container flex flex-wrap justify-between items-center mx-auto px-4 md:px-6 py-10 pt-28">
        <div className="flex w-full md:w-11/12">
          <section className="w-full">
            <div className="flex items-center flex-wrap gap-2">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
                {"Hello, I'm Jahed."}
              </h2>
              <span className="text-5xl">👋</span>
            </div>
            <div className="flex text-xl md:text-2xl mt-4 w-full">
              <span className="text-gray-200 leading-relaxed">
                {`I'm a `}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 text-2xl md:text-3xl font-bold">
                  Software Engineer
                </span>
                <span>
                  {` at Currensea, specializing in React Native, AWS, and mobile development. Based in London, UK.`}
                </span>
              </span>
            </div>
          </section>
        </div>

        <div className="pt-6 md:pt-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <NextImage
              src={JahedsPic}
              className="relative rounded-full border-4 border-slate-700"
              width={140}
              height={140}
            />
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/jahed04368"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
              className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 border border-slate-600"
            >
              <AiOutlineGithub size={30} className="text-gray-300 hover:text-yellow-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/jahed-miah04368/"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin"
              className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 border border-slate-600"
            >
              <AiFillLinkedin size={30} className="text-gray-300 hover:text-yellow-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap justify-between items-center mx-auto px-4 md:px-6 py-10">
        <div className="flex items-center mb-6">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-3xl md:text-4xl font-bold">
            {'About Me'}
          </h1>
          <div className="pl-3">
            <FcAbout size={35} />
          </div>
        </div>
        <div className="w-full">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-xl">
            <p className="text-gray-200 text-lg leading-relaxed">
              {about}
            </p>
          </div>
        </div>

        {/* Featured Project Section */}
        <div className="mt-12 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <FaReact className="text-blue-400 animate-spin-slow" size={32} />
            <h2 className="text-3xl font-bold text-gradient bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
              Featured Project
            </h2>
            <AiOutlineStar className="text-yellow-400" size={28} />
          </div>
          
          <div className="card p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{featuredProject.projectName}</h3>
                <p className="text-slate-300 leading-relaxed">{featuredProject.desc}</p>
              </div>
              <div className="flex gap-3">
                <a 
                  href={featuredProject.urllink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <AiOutlineLink size={20} />
                  Live Demo
                </a>
                <Link 
                  href="/projects"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                >
                  <AiOutlineProject size={20} />
                  Details
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-purple-400">
                  {featuredProject.highlights.players}
                </div>
                <div className="text-sm text-slate-400 mt-1">Players</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-purple-400">
                  {featuredProject.highlights.matches}
                </div>
                <div className="text-sm text-slate-400 mt-1">Matches</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-purple-400">
                  {featuredProject.highlights.seasons}
                </div>
                <div className="text-sm text-slate-400 mt-1">Seasons</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-purple-400">
                  {featuredProject.highlights.uptime}
                </div>
                <div className="text-sm text-slate-400 mt-1">Uptime</div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {featuredProject.tech.map((tech, index) => (
                  <span key={index} className="badge">{tech}</span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Key Features</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {featuredProject.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <FaFireAlt className="text-yellow-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-2 flex items-center gap-2 mb-6">
          <h1 className="text-3xl font-bold text-gradient bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
            Experience
          </h1>
          <MdOutlineHistoryEdu className="text-green-400" size={32} />
        </div>
        {employments.map((employment) => {
          return (
            <JobCard
              key={employment.id}
              id={employment.id}
              title={employment.title}
              dateOfEmployment={employment.date}
              company={employment.company}
              keyDuties={employment.key_duties}
              techUsed={employment.tech}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const data = await import('../components/data.json');
  const { about, employments, featuredProject } = data;

  return {
    props: {
      about,
      employments,
      featuredProject,
    },
  };
}
