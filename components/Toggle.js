import React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

export const DimensionToggle = ({ show, onClick }) => (
  <button
    className="flex h-6 w-7 md:h-9 md:w-9 items-center justify-center rounded-b-full bg-white px-2 pt-1"
    type="button"
    onClick={onClick}
  >
    {show && <AiOutlineArrowDown size={25} />}
    {!show && <AiOutlineArrowUp size={25} />}
  </button>
);

export default DimensionToggle;
