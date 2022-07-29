import React, { useState } from 'react';
import DimensionToggle from './Toggle';

const JobCard = ({
  id,
  title,
  dateOfEmployment,
  company,
  keyDuties,
  techUsed,
}) => {
  const [isExpanded, setExpand] = useState(false);
  const [isTrunicated, setTrunicated] = useState(false);
  const [show, setShow] = useState(true);

  const setTrunicatedWrapper = (el) => {
    const trunc = !!(el && el.clientHeight < el.scrollHeight);
    setTrunicated(trunc);
  };

  return (
    <div className="w-full m-2 ">
      <div className={show ? 'line-clamp-4' : ''}>
        <div className="p-4 w-full rounded-lg border shadow-md sm:p-2 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="text-2xl font-bold text-white">{company}</h5>
          <p className="text-base text-gray-200 sm:text-lg dark:text-gray-400">
            {title}
          </p>
          <p className="text-sm text-gray-300 sm:text-base dark:text-gray-400">
            {dateOfEmployment}
          </p>

          <div className="">
            <p className="mt-2 text-base text-gray-200 sm:text-lg dark:text-gray-400">
              {'Responsibilities:'}
            </p>
            <div
              className={`${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}
              ref={setTrunicatedWrapper}
            >
              <ul className="list-disc pl-6">
                {keyDuties.map((duty) => {
                  return (
                    <li
                      className="text-sm text-gray-300 sm:text-base dark:text-gray-400"
                      key={id}
                    >
                      {duty}
                    </li>
                  );
                })}
              </ul>
            </div>
            {(isTrunicated || isExpanded) && (
              <button
                className="font-normal text-sm underline text-green-300"
                onClick={() => setExpand(!isExpanded)}
              >
                {isExpanded ? 'Show less' : 'Show more'}
              </button>
            )}
          </div>
          {/* className={`${isExpanded ? 'line-clamp-none' : 'line-clamp-2'}`} */}
          <div className="">
            <p className="mt-2 text-base text-gray-200 sm:text-lg dark:text-gray-400">
              {'Technologies:'}
            </p>

            <div className="p-2">
              {techUsed.map((tech) => {
                return (
                  <span
                    key={id}
                    className="bg-blue-100 text-blue-800 text-base font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={show ? 'flex justify-center' : 'hidden'}>
        <DimensionToggle show={show} onClick={() => setShow(!show)} />
      </div>
    </div>
  );
};

export default JobCard;

export async function getStaticProps() {
  const res = await fetch('https://jsonkeeper.com/b/3P8Y');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
