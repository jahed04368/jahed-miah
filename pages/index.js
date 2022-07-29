import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { TbLetterT } from 'react-icons/tb';
import { FcAbout } from 'react-icons/fc';
import { MdOutlineHistoryEdu } from 'react-icons/md';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';

export default function Home({ data }) {
  console.log(data.work);
  return (
    <div className="bg-slate-700">
      <Navbar />
      <div className="text-white  container flex flex-wrap justify-between items-center mx-auto  px-2 py-10 lg:pt-20">
        <section className="">
          <div className="flex">
            <h2 className="text-3xl mt-2 text-yellow-400">
              {"Hello, I'm Jahed."}
            </h2>
            <a className="text-5xl pb-2 pl-2 text-white">{'😁👋🏼'}</a>
          </div>
          <div className="flex flex-wrap text-xl">
            <h4>{`I'm a software`}</h4>
            <TbLetterT size={25} className="text-green-400" />
            <h4>{'Shaped developer at Ostmodern, and'}</h4>
            <h4 className="text-xl 	">{'living in London, UK.'}</h4>
          </div>
        </section>
        <div className="sm:flex-wrap md:flex ">
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
      <div className=" container flex flex-wrap justify-between items-center mx-auto  px-2 py-10 ">
        <div className="flex">
          <h1 className="text-yellow-400 text-2xl">{'About me'}</h1>
          <div className="pl-1">
            <FcAbout size={30} />
          </div>
        </div>
        <p className="text-white text-lg m-2">{data.about}</p>

        <div className="py-2 flex">
          <h1 className="text-yellow-400 text-2xl ">{'Experience'}</h1>

          <div className="pl-1 text-green-400 mt-0.5">
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
