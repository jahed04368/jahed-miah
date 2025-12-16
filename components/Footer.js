import React from 'react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t-2 border-blue-500/30 backdrop-blur-lg mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/jahed04368"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 border border-slate-600 group"
            >
              <AiOutlineGithub size={28} className="text-gray-300 group-hover:text-yellow-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/jahed-miah04368/"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110 border border-slate-600 group"
            >
              <AiFillLinkedin size={28} className="text-gray-300 group-hover:text-yellow-400 transition-colors" />
            </a>
          </div>

          {/* Name & Copyright */}
          <div className="text-center">
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 mb-2">
              {'Jahed Miah'}
            </h1>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Tagline */}
          <p className="text-gray-500 text-sm text-center max-w-md">
            Software Engineer specializing in React Native, AWS, and mobile development
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
