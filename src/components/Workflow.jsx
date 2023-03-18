import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Workflow = () => {
  const workflowData = {
    Boards:
      'Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments.',
    Views:
      'Visualize and plan your work more efficiently with multiple views: Kanban board, calendar, timeline, Gantt chart, and more.',
    Dashboard:
      'Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards.',
    Integration:
      'Connect monday.com with all your favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.',
    Automation:
      'Streamline processes to focus on the work that matters. Choose from a variety of automation recipes or create your own in minutes.',
    Apps: 'Expand the capabilities of your Work OS with monday apps. Enhance your workflows with custom views, widgets, integrations, and more.',
    Docs: 'Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.',
  };

  const [workflowhead, setWorkflowhead] = useState('Boards');
  const [workflowPara, setWorkflowPara] = useState('');

  useEffect(() => {
    let data = workflowData[workflowhead];
    // console.log(data);
    setWorkflowPara(data);
  }, [workflowhead]);

  return (
    <Box className='mt-20'>
      <Box className='flex text-gray-600 justify-center flex-col items-center gap-8'>
        <p className='text-5xl '>
          <span className='font-bold'>Everything</span> you need for{' '}
          <span className='font-bold'>any workflow</span>
        </p>
        <p className='text-lg'>
          Easily build your ideal workflow with monday.com building blocks.
        </p>
        <Box className='flex shadow-[0_10px_30px_0px_rgba(29,140,242,0.2)] rounded-lg'>
          <Box
            onClick={(e) => {
              setWorkflowhead(e.target.innerText);
            }}
            tabindex='1'
            className='flex relative focus:after:h-1 focus:after:absolute focus:after:w-full focus:after:bg-indigo-500 focus:after:bottom-0 focus:after:rounded-t-md hover:bg-gray-100 cursor-pointer text-gray-500 text-sm font-light gap-2 p-6 px-7 flex-col items-center'>
            <img className='w-4' src='/assets/board_icon.png' alt='' />
            <p>Boards</p>
          </Box>
          <Box
            onClick={(e) => {
              setWorkflowhead(e.target.innerText);
            }}
            tabindex='1'
            className='flex relative focus:after:h-1 focus:after:absolute focus:after:w-full focus:after:bg-indigo-500 focus:after:bottom-0 focus:after:rounded-t-md hover:bg-gray-100 cursor-pointer text-gray-500 text-sm font-light gap-2 p-6 px-7 flex-col items-center'>
            <img className='w-4' src='/assets/board_icon.png' alt='' />
            <p>Views</p>
          </Box>
          <Box
            onClick={(e) => {
              setWorkflowhead(e.target.innerText);
            }}
            tabindex='1'
            className='flex relative focus:after:h-1 focus:after:absolute focus:after:w-full focus:after:bg-indigo-500 focus:after:bottom-0 focus:after:rounded-t-md hover:bg-gray-100 cursor-pointer text-gray-500 text-sm font-light gap-2 p-6 px-7 flex-col items-center'>
            <img className='w-4' src='/assets/board_icon.png' alt='' />
            <p>Dashboard</p>
          </Box>
          <Box
            onClick={(e) => {
              setWorkflowhead(e.target.innerText);
            }}
            tabindex='1'
            className='flex relative focus:after:h-1 focus:after:absolute focus:after:w-full focus:after:bg-indigo-500 focus:after:bottom-0 focus:after:rounded-t-md hover:bg-gray-100 cursor-pointer text-gray-500 text-sm font-light gap-2 p-6 px-7 flex-col items-center'>
            <img className='w-4' src='/assets/board_icon.png' alt='' />
            <p>Integration</p>
          </Box>
          <Box
            onClick={(e) => {
              setWorkflowhead(e.target.innerText);
            }}
            tabindex='1'
            className='flex relative focus:after:h-1 focus:after:absolute focus:after:w-full focus:after:bg-indigo-500 focus:after:bottom-0 focus:after:rounded-t-md hover:bg-gray-100 cursor-pointer text-gray-500 text-sm font-light gap-2 p-6 px-7 flex-col items-center'>
            <img className='w-4' src='/assets/board_icon.png' alt='' />
            <p>Automation</p>
          </Box>
          <Box
            onClick={(e) => {
              setWorkflowhead(e.target.innerText);
            }}
            tabindex='1'
            className='flex relative focus:after:h-1 focus:after:absolute focus:after:w-full focus:after:bg-indigo-500 focus:after:bottom-0 focus:after:rounded-t-md hover:bg-gray-100 cursor-pointer text-gray-500 text-sm font-light gap-2 p-6 px-7 flex-col items-center'>
            <img className='w-4' src='/assets/board_icon.png' alt='' />
            <p>Apps</p>
          </Box>
          <Box
            onClick={(e) => {
              setWorkflowhead(e.target.innerText);
            }}
            tabindex='1'
            className='flex relative focus:after:h-1 focus:after:absolute focus:after:w-full focus:after:bg-indigo-500 focus:after:bottom-0 focus:after:rounded-t-md hover:bg-gray-100 cursor-pointer text-gray-500 text-sm font-light gap-2 p-6 px-7 flex-col items-center'>
            <img className='w-4' src='/assets/board_icon.png' alt='' />
            <p>Docs</p>
          </Box>
        </Box>
      </Box>
      <Box className='flex mt-20 max-w-7xl mx-auto gap-4 justify-between items-center'>
        <Box className='flex-1  '>
          <img
            className='w-[100%] shadow-[0_10px_30px_0px_rgba(29,140,242,0.2)] rounded-xl'
            src='/assets/team-iteration.avif'
            alt=''
          />
        </Box>
        <Box className='flex-1 flex justify-end'>
          <Box className='flex gap-4 ml-28 items-center flex-col'>
            <Box className='flex gap-4 self-start items-center'>
              <img className='w-6' src='/assets/views_icon.png' alt='' />{' '}
              <p className='text-2xl text-indigo-500'>{workflowhead}</p>
            </Box>
            <p className='font-light  leading-6 text-lg'>{workflowPara}</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Workflow;
