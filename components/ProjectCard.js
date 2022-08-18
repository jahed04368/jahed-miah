import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ProjectCard = ({ img, desc, projectName, urllink }) => {
  return (
    <section className="bg-white dark:bg-gray-900 m-2 border-4 rounded border-red-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div className="mr-auto place-self-center lg:col-span-7 ">
          <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
            {projectName}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {desc}
          </p>
          <div className="pb-2">
            <Link href={urllink} target={'_blank'}>
              <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                {projectName}
                <AiOutlineArrowRight size={20} />
              </a>
            </Link>
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <NextImage
            src={`/${img}`}
            width={640}
            height={360}
            alt={projectName}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
