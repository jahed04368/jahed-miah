import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { MdOutlineHistoryEdu } from 'react-icons/md';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';
import React, { useState } from 'react';
import NextImage from 'next/image';
import JahedsPic from '../public/images/jahed-pic.png';

export default function Home({ about, employments }) {
  const [isExpanded, setExpand] = useState(false);
  const [isTrunicated, setTrunicated] = useState(false);

  const setTrunicatedWrapper = (el) => {
    const trunc = !!(el && el.clientHeight < el.scrollHeight);
    setTrunicated(trunc);
  };

  return (
    <div className="bg-slate-700">
      <Navbar />
      <div className="text-white container flex flex-wrap justify-between items-center mx-auto px-2 py-10 pt-28">
        <div className="flex w-full md:w-11/12">
          <section className="w-full">
            <div className="flex whitespace-nowrap">
              <h2 className="text-3xl mt-2 text-yellow-400">
                {"Hello, I'm Jahed."}
              </h2>
              <a className="text-5xl pb-5 pl-2 text-white">{'😁👋🏼'}</a>
            </div>
            <div className="flex text-xl inline	w-10/12 md-w-full">
              <span>
                {`I'm a software `}
                <span className="text-green-300 text-2xl">T</span>
                <span>
                  {` Shaped developer at Ostmodern, and living in London, UK.`}
                </span>
              </span>
            </div>
          </section>
        </div>

        <div className="pt-3 md:pt-0">
          <NextImage
            src={JahedsPic}
            className="rounded-full"
            width={120}
            height={150}
          />
          <div className="flex justify-center">
            <a
              href="https://github.com/jahed04368"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <AiOutlineGithub size={30} className="hover:text-yellow-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/jahed-miah04368/"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin"
            >
              <AiFillLinkedin size={30} className="hover:text-yellow-400" />
            </a>
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap justify-between items-center mx-auto px-2 py-10">
        <div className="flex">
          <h1 className="text-yellow-400 text-2xl">{'About me'}</h1>
          <div className="pl-1">
            <FcAbout size={30} />
          </div>
        </div>
        <div>
          <p
            className={`${
              isExpanded
                ? `text-white text-lg m-2 md:line-clamp-none line-clamp-none`
                : `text-white text-lg m-2 md:line-clamp-none line-clamp-5`
            }`}
            ref={setTrunicatedWrapper}
          >
            {about}
          </p>
          {(isTrunicated || isExpanded) && (
            <button
              className="font-normal text-sm underline text-green-300 md:hidden pl-2"
              onClick={() => setExpand(!isExpanded)}
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>
        <div className="py-2 flex">
          <h1 className="text-yellow-400 text-2xl">{'Experience'}</h1>
          <div className="pl-1 pr-1 text-green-400 mt-0.5">
            <MdOutlineHistoryEdu size={30} />
          </div>
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
  const res = await fetch('https://jsonkeeper.com/b/PQAU');
  const { about, employments } = await res.json();

  return {
    props: {
      about,
      employments,
    },
  };
}
