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
    <div className="w-full p-2">
      <div className={show ? 'line-clamp-4' : ''}>
        <div className="p-6 w-full rounded-2xl border border-slate-700 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.01]">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h5 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {company}
              </h5>
              <p className="text-lg text-gray-200 font-semibold">
                {title}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {dateOfEmployment}
              </p>
            </div>
          </div>

          <div>
            <p className="mt-4 text-base text-gray-300 font-semibold mb-2">
              {'Key Responsibilities:'}
            </p>
            <div
              className={`${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}
              ref={setTrunicatedWrapper}
            >
              <ul className="list-none pl-0 space-y-2">
                {keyDuties.map((duty, index) => {
                  return (
                    <li
                      className="text-sm text-gray-300 flex items-start"
                      key={`${id}-${index}`}
                    >
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      <span>{duty}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            {(isTrunicated || isExpanded) && (
              <button
                className="mt-3 font-semibold text-sm underline text-blue-400 hover:text-blue-300 transition-colors duration-300"
                onClick={() => setExpand(!isExpanded)}
              >
                {isExpanded ? 'Show less' : 'Show more'}
              </button>
            )}
          </div>
          <div>
            <p className="mt-5 text-base text-gray-300 font-semibold mb-3">
              {'Tech Stack:'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {techUsed.map((tech, index) => {
              return (
                <span
                  key={`${id}-tech-${index}`}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300"
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className={show ? 'flex justify-center mt-3' : 'hidden'}>
        <DimensionToggle show={show} onClick={() => setShow(!show)} />
      </div>
    </div>
  );
};

export default JobCard;
