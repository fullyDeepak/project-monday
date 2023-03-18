import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StyledEngineProvider } from '@mui/material';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>
);
