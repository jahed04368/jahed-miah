import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-slate-700 border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-900 text-white border-t-2 border-white">
      <div className="flex flex-wrap  justify-center mx-auto">
        <a
          href="https://github.com/jahed04368"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub size={30} className="hover:text-yellow-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/jahed-miah04368/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={30} className="hover:text-yellow-400" />
        </a>
      </div>
      <h1 className="flex justify-center mx-auto py-2">{"Jahed Miah"}</h1>
    </div>
  );
};

export default Footer;
