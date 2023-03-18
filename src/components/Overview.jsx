import { Box } from '@mui/material';
import React from 'react';

const triangle = (
  <svg
    width={2300}
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

const Overview = () => {
  return (
    <>
      <Box className='bg-[#00023b] -mt-24'>
        <Box className='flex max-w-7xl leading-6 mx-auto gap-40 text-white pt-32 '>
          <Box className='flex flex-1 gap-40 flex-col'>
            <Box className='flex gap-3 flex-col'>
              <p className='text-4xl'>Streamline your work for</p>
              <p className='text-4xl font-semibold'>maximum productivity</p>
              <p className='text-lg font-light leading-8'>
                Centralize all your work, processes, tools, and files into one
                Work OS. Connect teams, bridge silos, and maintain one source of
                truth across your organization.
              </p>
            </Box>
            <Box className='flex gap-5 items-center '>
              <Box className='w-28'>
                <img src='/assets/jane.avif' alt='' />
              </Box>
              <Box>
                <p className='font-light leading-7 mb-2 text-sm'>
                  “ We use monday.com for a plethora of use cases, the&nbsp;
                  &nbsp; &nbsp;opportunities this platform provides are
                  limitless.”
                </p>
                <p className='text-sm font-semibold ml-2'>
                  Jane Tham | VP of Collaboration Technologies
                </p>
                <p className='text-xs ml-2 font-light'>Universal Music Group</p>
              </Box>
            </Box>
            <Box className='flex gap-3 flex-col'>
              <p className='text-4xl'>Streamline your work for</p>
              <p className='text-4xl font-semibold'>maximum productivity</p>
              <p className='text-lg font-light leading-8'>
                Centralize all your work, processes, tools, and files into one
                Work OS. Connect teams, bridge silos, and maintain one source of
                truth across your organization.
              </p>
            </Box>
            <Box className='flex gap-5 items-center '>
              <Box className='w-28'>
                <img src='/assets/jane.avif' alt='' />
              </Box>
              <Box>
                <p className='font-light leading-7 mb-2 text-sm'>
                  “ We use monday.com for a plethora of use cases, the&nbsp;
                  &nbsp; &nbsp;opportunities this platform provides are
                  limitless.”
                </p>
                <p className='text-sm font-semibold ml-2'>
                  Jane Tham | VP of Collaboration Technologies
                </p>
                <p className='text-xs ml-2 font-light'>Universal Music Group</p>
              </Box>
            </Box>
            <Box className='flex gap-3 flex-col'>
              <p className='text-4xl'>Streamline your work for</p>
              <p className='text-4xl font-semibold'>maximum productivity</p>
              <p className='text-lg font-light leading-8'>
                Centralize all your work, processes, tools, and files into one
                Work OS. Connect teams, bridge silos, and maintain one source of
                truth across your organization.
              </p>
            </Box>
            <Box className='flex gap-5 items-center '>
              <Box className='w-28'>
                <img src='/assets/jane.avif' alt='' />
              </Box>
              <Box>
                <p className='font-light leading-7 mb-2 text-sm'>
                  “ We use monday.com for a plethora of use cases, the&nbsp;
                  &nbsp; &nbsp;opportunities this platform provides are
                  limitless.”
                </p>
                <p className='text-sm font-semibold ml-2'>
                  Jane Tham | VP of Collaboration Technologies
                </p>
                <p className='text-xs ml-2 font-light'>Universal Music Group</p>
              </Box>
            </Box>
          </Box>
          <Box className='flex flex-col flex-1 h-full top-20 sticky'>
            <Box className='bg-white/60 h-3 rounded-t-lg'></Box>
            <img src='/assets/overview.png' alt='' />
          </Box>
        </Box>
      </Box>
      <Box className='rotate-180'>{triangle}</Box>
    </>
  );
};

export default Overview;
