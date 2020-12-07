import React from 'react';
import './App.css';
import BasicGlitz from './components/BasicGlitz';
import Pseudoelement from './components/Pseudoelement';
import Animation from './components/Animation';
import Boxmodel from './components/Boxmodel';

function App() {
  return (
    <>
      <BasicGlitz />
      <Boxmodel />
      <Pseudoelement />
      <Animation />
    </>
  );
}

export default App;
