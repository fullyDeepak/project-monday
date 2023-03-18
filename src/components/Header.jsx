import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import GetStartedBtn from './GetStartedBtn';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  return (
    <Box
      sx={{
        marginBottom: '65px',
        display: 'block',
      }}>
      <AppBar
        position='fixed'
        className='bg-white text-sm font-light text-black'>
        <Container className='max-w-[1400px]'>
          <Toolbar disableGutters>
            <Box className='w-[12%] mr-5'>
              <img src='public/assets/monday-logo-x2.png' alt='' />
            </Box>
            <Box className='flex justify-between w-full'>
              <Box className='flex  gap-3 '>
                <Box className='hover:bg-slate-100 p-2 rounded-lg cursor-pointer'>
                  Product
                  <ExpandMoreIcon />
                </Box>
                <Box className='hover:bg-slate-100 p-2 rounded-lg cursor-pointer'>
                  Teams
                  <ExpandMoreIcon />
                </Box>
                <Box className='hover:bg-slate-100 p-2 rounded-lg cursor-pointer'>
                  Platforms
                  <ExpandMoreIcon />
                </Box>
                <Box className='hover:bg-slate-100 p-2 rounded-lg cursor-pointer'>
                  Resources <ExpandMoreIcon />
                </Box>
              </Box>
              <Box className='flex gap-4'>
                <a
                  className='hover:bg-slate-100 p-2 rounded-lg cursor-pointer'
                  href=''>
                  Pricing
                </a>
                <a
                  className='hover:bg-slate-100 p-2 rounded-lg cursor-pointer'
                  href=''>
                  Contact sales
                </a>
                <a
                  className='hover:bg-slate-100 p-2 rounded-lg cursor-pointer'
                  href=''>
                  Log in
                </a>
                <GetStartedBtn addCSS={`px-4`} />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
