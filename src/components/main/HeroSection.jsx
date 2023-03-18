import { CheckBox } from '@mui/icons-material';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import GetStartedBtn from '../GetStartedBtn';

const HeroSection = () => {
  return (
    <Box className='bg-[#00023b] flex flex-col gap-5 text-center pb-20 text-slate-200 py-8'>
      <Box className='flex flex-col gap-10'>
        <Box className='text-7xl  flex flex-col gap-6'>
          <p>A platform build for a </p>
          <p>new way of working</p>
        </Box>
        <p className='text-xl'>
          What would you like to manage with monday.com Work OS?
        </p>
      </Box>
      <Box className='flex gap-5 max-w-7xl mx-auto'>
        <label
          className='flex flex-col  justify-between items-center border w-[200px] cursor-pointer border-[#ffffff4d] hover:border-red-500 p-3 rounded-lg '
          htmlFor='design'>
          <input
            className='self-start focus:outline-0 focus:ring-offset-0 focus:shadow-none hover:border-red-500 active:outline-0 outline-0 bg-transparent'
            type='checkbox'
            name='checkbox'
            id='design'
          />
          <img className='w-10' src='public/assets/design_icon.png' alt='' />
          <p>Creative & design</p>
        </label>
        <label
          className='flex flex-col  justify-between items-center border w-[200px] cursor-pointer border-[#ffffff4d] hover:border-green-500 p-3 rounded-lg '
          htmlFor='Software'>
          <input
            className='self-start focus:outline-0 focus:ring-offset-0 focus:shadow-none hover:border-green-500 active:outline-0 outline-0 bg-transparent'
            type='checkbox'
            name='checkbox'
            id='Software'
          />
          <img className='w-10' src='public/assets/design_icon.png' alt='' />
          <p>Software development</p>
        </label>
        <label
          className='flex flex-col  justify-between items-center border w-[200px] cursor-pointer border-[#ffffff4d] hover:border-red-500 p-3 rounded-lg '
          htmlFor='Marketing'>
          <input
            className='self-start focus:outline-0 focus:ring-offset-0 focus:shadow-none active:outline-0 hover:border-red-500 outline-0 bg-transparent'
            type='checkbox'
            name='checkbox'
            id='Marketing'
          />
          <img className='w-10' src='public/assets/design_icon.png' alt='' />
          <p>Marketing</p>
        </label>
        <label
          className='flex flex-col  justify-between items-center border w-[200px] cursor-pointer border-[#ffffff4d] hover:border-orange-500 p-3 rounded-lg '
          htmlFor='Project'>
          <input
            className='self-start focus:outline-0 focus:ring-offset-0 focus:shadow-none active:outline-0 hover:border-orange-500 outline-0 bg-transparent'
            type='checkbox'
            name='checkbox'
            id='Project'
          />
          <img className='w-10' src='public/assets/design_icon.png' alt='' />
          <p>Project management</p>
        </label>
        <label
          className='flex flex-col  justify-between items-center border w-[200px] cursor-pointer border-[#ffffff4d] hover:border-green-500 p-3 rounded-lg '
          htmlFor='CRM'>
          <input
            className='self-start focus:outline-0 focus:ring-offset-0 focus:shadow-none active:outline-0 hover:border-green-500 outline-0 bg-transparent'
            type='checkbox'
            name='checkbox'
            id='CRM'
          />
          <img className='w-10' src='public/assets/design_icon.png' alt='' />
          <p>Sales & CRM</p>
        </label>
        <label
          className='flex flex-col  justify-between items-center border w-[200px] cursor-pointer border-[#ffffff4d] hover:border-blue-500 p-3 rounded-lg '
          htmlFor='Task'>
          <input
            className='self-start focus:outline-0 focus:ring-offset-0 focus:shadow-none active:outline-0 hover:border-blue-500 outline-0 bg-transparent'
            type='checkbox'
            name='checkbox'
            id='Task'
          />
          <img className='w-10' src='public/assets/design_icon.png' alt='' />
          <p>Task management</p>
        </label>
        <label
          className='flex flex-col  justify-between items-center border w-[200px] cursor-pointer border-[#ffffff4d] hover:border-red-500 p-3 rounded-lg '
          htmlFor='HR'>
          <input
            className='self-start focus:outline-0 focus:ring-offset-0 focus:shadow-none active:outline-0 hover:border-red-500 outline-0 bg-transparent'
            type='checkbox'
            name='checkbox'
            id='HR'
          />
          <img className='w-10' src='public/assets/design_icon.png' alt='' />
          <p>HR</p>
        </label>
        <label
          className='flex flex-col  justify-between items-center border w-[200px] cursor-pointer border-[#ffffff4d] hover:border-green-500 p-3 rounded-lg '
          htmlFor='Operations'>
          <input
            className='self-start focus:outline-0 focus:ring-offset-0 focus:shadow-none active:outline-0 hover:border-green-500 outline-0 bg-transparent'
            type='checkbox'
            name='checkbox'
            id='Operations'
          />
          <img className='w-10' src='public/assets/design_icon.png' alt='' />
          <p>Operations</p>
        </label>
        <label
          className='flex flex-col  justify-between items-center border w-[200px] cursor-pointer border-[#ffffff4d] hover:border-indigo-500 p-3 rounded-lg '
          htmlFor='workflows'>
          <input
            className='self-start focus:outline-0 focus:ring-offset-0 focus:shadow-none active:outline-0 hover:border-indigo-500 outline-0 bg-transparent'
            type='checkbox'
            name='checkbox'
            id='workflows'
          />
          <img className='w-10' src='public/assets/design_icon.png' alt='' />
          <p>More workflows</p>
        </label>
      </Box>
      <Box className='flex gap-3 items-center flex-col mx-auto'>
        <GetStartedBtn
          addCSS={`bg-gradient-to-r w-50 from-indigo-700 to-indigo-300 px-8 py-3`}
        />
        <p>No credit card needed ✦ Unlimited time on Free plan</p>
      </Box>
    </Box>
  );
};

export default HeroSection;
