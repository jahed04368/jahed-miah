import React, { useState } from 'react';
import DimensionToggle from './Toggle';
import TodoAppImage from '../public/images/to-do-app/todo-app.jpeg';
import NextImage from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ desc, projectName, urllink }) => {
  return (
    <div className="w-full p-2 ">
      <div className="grid lg:grid-cols-4  p-4 w-full rounded-lg border shadow-md sm:p-2 dark:bg-gray-800 dark:border-gray-700">
        <div className="row-span-1	md:col-span-3">
          <p className="text-2xl font-bold text-white pb-2">{projectName}</p>
          <Link href={urllink} target={'_blank'} rel="noreferrer" className="">
            <a className="text-blue-300 text- italic">
              {`Go to ${projectName}`}
            </a>
          </Link>
          <p className="text-lg text-white pt-2 pr-2">{desc}</p>
        </div>
        <div className="row-span-1 md:col-span-1 py-3 ">
          <NextImage src={TodoAppImage} width={600} height={350} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
