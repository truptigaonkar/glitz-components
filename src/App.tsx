import React from 'react';
import './App.css';
import BasicGlitz from './components/BasicGlitz';
import Pseudoelement from './components/Pseudoelement';
import Animation from './components/Animation';
import Boxmodel from './components/Boxmodel';
import DeepStyleComposition from './components/DeepStyleComposition';

function App() {
  return (
    <>
      <BasicGlitz />
      <Boxmodel />
      <DeepStyleComposition />
      <Pseudoelement />
      <Animation />
    </>
  );
}

export default App;
