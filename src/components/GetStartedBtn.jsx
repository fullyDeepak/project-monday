import React from 'react';
import EastIcon from '@mui/icons-material/East';

const GetStartedBtn = ({ addCSS }) => {
  return (
    <a
      className={`hover:bg-indigo-700 hover:text-white bg-indigo-500 text-white rounded-full cursor-pointer group flex items-center justify-center gap-1  ${addCSS}`}
      href=''>
      Get Started
      <span className='group-hover:translate-x-2 transition duration-500'>
        <EastIcon fontSize='2' />
      </span>
    </a>
  );
};

export default GetStartedBtn;
