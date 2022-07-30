import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { TbLetterT } from 'react-icons/tb';
import { FcAbout } from 'react-icons/fc';
import { MdOutlineHistoryEdu } from 'react-icons/md';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';
import React, { useState } from 'react';

export default function Home({ data }) {
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
        <section className="">
          <div className="flex">
            <h2 className="text-3xl mt-2 text-yellow-400">
              {"Hello, I'm Jahed."}
            </h2>
            <a className="text-5xl pb-5 pl-2 text-white">{'😁👋🏼'}</a>
          </div>
          <div className="flex flex-wrap text-xl ">
            <h4>{`I'm a software`}</h4>
            <TbLetterT size={25} className="text-green-400" />
            <h4>{'Shaped developer at Ostmodern, and'}</h4>
            <h4>{'living in London, UK.'}</h4>
          </div>
        </section>
        <div className="sm:flex-wrap md:flex">
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
      </div>
      <div className="container flex flex-wrap justify-between items-center mx-auto  px-2 py-10">
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
                ? `text-white text-lg m-2  md:line-clamp-none line-clamp-none`
                : `text-white text-lg m-2  md:line-clamp-none line-clamp-5`
            }`}
            ref={setTrunicatedWrapper}
          >
            {data.about}
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
          <h1 className="text-yellow-400 text-2xl ">{'Experience'}</h1>
          <div className="pl-1 pr-1 text-green-400 mt-0.5">
            <MdOutlineHistoryEdu size={30} />
          </div>
        </div>
        {data.employments.map((employment) => {
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
  const res = await fetch('https://jsonkeeper.com/b/4ED5');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
