import React, { useState } from 'react';
import DimensionToggle from './Toggle';
import TodoAppImage from '../public/images/to-do-app/todo-app.jpeg';
import NextImage from 'next/image';
import Link from 'next/link';

const ProjectCard = ({
  id = '1',
  desc = `This app records all the To Do's you have on localStorage, you can also remove, search and hide all the To Do's you have.`,
  projectName = 'To-Do App',
  urllink = 'https://todo-jahed04368.netlify.app/',
}) => {
  const [isExpanded, setExpand] = useState(false);
  const [isTrunicated, setTrunicated] = useState(false);
  const [show, setShow] = useState(true);

  const setTrunicatedWrapper = (el) => {
    const trunc = !!(el && el.clientHeight < el.scrollHeight);
    setTrunicated(trunc);
  };

  return (
    <div className="w-full p-2 ">
      <div className="grid grid-cols-4 p-4 w-full rounded-lg border shadow-md sm:p-2 dark:bg-gray-800 dark:border-gray-700">
        <div className="col-span-3">
          <p className="text-2xl font-bold text-white pb-2">{projectName}</p>
          <Link href={urllink} target={'_blank'} rel="noreferrer" className="">
            <a className="text-blue-300 text- italic">
              {`Go to ${projectName}`}
            </a>
          </Link>
          <p className="text-lg text-white pt-2">{desc}</p>
        </div>
        <div className="col-span-1">
          <NextImage src={TodoAppImage} width={600} height={350} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
