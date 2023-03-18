import { Box } from '@mui/system';
import React from 'react';
import GetStartedBtn from './GetStartedBtn';

const triangle = (
  <svg
    width={'100%'}
    height={450}
    viewBox='0 0 608.54165 119.0625'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0-.09l608.604 74.692v44.46H.001z'
      fill='#00023b'
      fillOpacity={1}
      strokeWidth={0.346904}
    />
  </svg>
);

const Featured = () => {
  return (
    <Box className='mt-5'>
      <Box className='flex flex-col items-center gap-10'>
        <p className='text-2xl'>Trusted by 180,000+ customers worldwide</p>
        <Box className='flex gap-5'>
          <img className=' h-10' src='public/assets/genpact.png' alt='' />
          <img className=' h-10' src='public/assets/HoltCat.png' alt='' />
          <img className=' h-10' src='public/assets/canva.png' alt='' />
          <img className=' h-10' src='public/assets/coca_cola.png' alt='' />
          <img className=' h-10' src='public/assets/lionsgate.png' alt='' />
          <img className=' h-10' src='public/assets/hulu.png' alt='' />
          <img className=' h-10' src='public/assets/bd.png' alt='' />
          <img className=' h-10' src='public/assets/glossier.png' alt='' />
          <img className=' h-10' src='public/assets/universal.png' alt='' />
        </Box>
        <Box className='flex mt-40 max-w-7xl'>
          <Box className='flex-1 text-4xl font-light leading-[50px] '>
            <p>The Work OS that lets you</p>
            <p>
              shape workflows,
              <span className='font-bold'> your way</span>
            </p>
          </Box>
          <Box className='flex-1 leading-10 font-light text-xl flex flex-col gap-4'>
            <p>
              Boost your team’s alignment, efficiency, and productivity by
              customizing any workflow to fit your needs.
            </p>
            <GetStartedBtn addCSS={`self-start px-7 py-3 text-base`} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box className='z-0 bg-[#00023b]'>
          <img src='public/assets/dashboard-ss.png' alt='' />
        </Box>
        <Box className='-mt-60'>{triangle}</Box>
      </Box>
    </Box>
  );
};

export default Featured;
