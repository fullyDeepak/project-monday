import { Box } from '@mui/material';
import React from 'react';

const Roadmap = () => {
  return (
    <Box className='pb-32 mb-20 bg-[#00023b]'>
      <Box className='relative'>
        <Box className=''>
          <img src='/assets/roadmap-bottom.avif' alt='' />
        </Box>
        <Box className='absolute top-5 left-[50%] -translate-x-1/2 w-[60%] mx-auto '>
          <img src='/assets/roadmap-topavif.avif' alt='' />
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Roadmap;
