import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { AiOutlineGithub, AiOutlineLink, AiOutlineStar, AiOutlineCode, AiOutlineDeploymentUnit, AiOutlineDatabase } from 'react-icons/ai';
import { FaReact, FaFireAlt, FaUsers, FaCalendar, FaTrophy, FaChartLine } from 'react-icons/fa';
import { MdOutlineDashboard, MdOutlineEmail } from 'react-icons/md';

const Projects = ({ featuredProject }) => {
  const architectureFeatures = [
    {
      icon: <FaReact className="text-cyan-400" size={30} />,
      title: "React 18 with Vite",
      description: "Modern React architecture with Vite for lightning-fast builds and HMR"
    },
    {
      icon: <AiOutlineDatabase className="text-orange-400" size={30} />,
      title: "Firebase Realtime Database",
      description: "Real-time data synchronization with automatic fallback to local files in development"
    },
    {
      icon: <AiOutlineDeploymentUnit className="text-green-400" size={30} />,
      title: "Environment-Aware API",
      description: "Centralized data fetching with automatic switching between local and production sources"
    },
    {
      icon: <MdOutlineDashboard className="text-purple-400" size={30} />,
      title: "Admin Panel",
      description: "Complete match entry system with form validation and direct database updates"
    },
    {
      icon: <FaCalendar className="text-yellow-400" size={30} />,
      title: "Season Management",
      description: "Date-aware season detection spanning multiple years (e.g., Season 25/26: Feb 2025 - Feb 2026)"
    },
    {
      icon: <MdOutlineEmail className="text-blue-400" size={30} />,
      title: "EmailJS Integration",
      description: "Automated email notifications to subscribers when statistics are updated"
    }
  ];

  const keyFeatures = [
    "Individual goal and assist tracking with named player system",
    "Team formation recording with positions for each match",
    "Automatic points calculation (wins × 3 + draws × 1)",
    "Clean sheets tracking for goalkeepers with special display",
    "Own goal support with proper validation",
    "Firebase data synchronization with automated backup system",
    "Reverse chronological match display (latest first)",
    "All-time statistics aggregation across multiple seasons",
    "Responsive design optimized for mobile and desktop",
    "Development-friendly local JSON file support"
  ];

  const techStack = {
    frontend: ["React 18", "Vite", "React Router DOM", "CSS Modules"],
    backend: ["Firebase Realtime Database", "EmailJS"],
    development: ["Node.js", "npm", "Git/GitHub"],
    deployment: ["Vercel", "Continuous Deployment"]
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 py-16 pt-28">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <FaReact className="text-cyan-400 animate-spin-slow" size={60} />
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
              {featuredProject.projectName}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {featuredProject.desc}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href={featuredProject.urllink}
              target="_blank"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:scale-105"
            >
              <AiOutlineLink size={24} />
              View Live Demo
              <FaFireAlt className="text-yellow-300" />
            </Link>
            <Link
              href={featuredProject.githubLink}
              target="_blank"
              className="flex items-center gap-2 px-8 py-4 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300 border border-slate-600 transform hover:scale-105"
            >
              <AiOutlineGithub size={24} />
              View Source Code
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {Object.entries(featuredProject.highlights).map(([key, value]) => (
            <div key={key} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-center border border-slate-700 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
                {value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">
                {key}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture & Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Architecture Section */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <AiOutlineCode className="text-yellow-400" size={32} />
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Architecture
              </h2>
            </div>
            <div className="space-y-6">
              {architectureFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <AiOutlineStar className="text-yellow-400" size={32} />
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Key Features
              </h2>
            </div>
            <ul className="space-y-3">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 mt-1 text-xl">✓</span>
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-xl mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FaChartLine className="text-yellow-400" size={32} />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Technology Stack
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-gray-300 mb-3 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Highlights */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <FaTrophy className="text-yellow-400" size={32} />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Project Highlights
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
              <FaUsers className="text-green-400 mb-3" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Active Community</h3>
              <p className="text-gray-400">
                Managing data for 20+ active players across multiple seasons with real-time updates
              </p>
            </div>
            <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
              <FaCalendar className="text-blue-400 mb-3" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Season Tracking</h3>
              <p className="text-gray-400">
                Intelligent season management system with date-aware detection and historical data aggregation
              </p>
            </div>
            <div className="p-6 bg-slate-700/30 rounded-lg border border-slate-600/50">
              <FaChartLine className="text-purple-400 mb-3" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">Analytics & Stats</h3>
              <p className="text-gray-400">
                Comprehensive player statistics with automatic calculations, rankings, and performance tracking
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to see more projects?
            </h2>
            <p className="text-gray-300 mb-6">
              Check out my GitHub profile for more open-source contributions and personal projects
            </p>
            <Link
              href="https://github.com/jahed04368"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
            >
              <AiOutlineGithub size={24} />
              Visit GitHub Profile
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const data = await import('../../components/data.json');
  const { featuredProject } = data;

  return {
    props: {
      featuredProject,
    },
  };
}

export default Projects;
