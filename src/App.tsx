import React from 'react';
import './App.css';
import BasicGlitz from './components/BasicGlitz';
import Pseudoelement from './components/Pseudoelement';
import Animation from './components/Animation';
import Boxmodel from './components/Boxmodel';
import DeepStyleComposition from './components/DeepStyleComposition';
import HeadersFlexbox from './components/HeadersFlexbox';
import { Hr } from './Shared/Generic';
import DynamicStylingUsingProps from './components/DynamicStylingUsingProps';

function App() {
  return (
    <>
      <DynamicStylingUsingProps success color="blue"/>
      <BasicGlitz />
      <Boxmodel />
      <DeepStyleComposition />
      <Pseudoelement />
      <Animation />
      <HeadersFlexbox /><Hr />
    </>
  );
}

export default App;
