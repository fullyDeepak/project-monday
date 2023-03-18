import { useState } from 'react';
import './App.css';
import Featured from './components/Featured';
import Header from './components/Header';
import Main from './components/Main';
import Overview from './components/Overview';
import Workflow from './components/Workflow';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Featured />
      <Overview />
      <Workflow />
      <div className='mb-[1000px]'></div>
    </>
  );
}

export default App;
