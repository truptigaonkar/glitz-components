import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import BasicGlitz from './components/BasicGlitz';
import Pseudoelement from './components/Pseudoelement';
import Boxmodel from './components/Boxmodel';
import DeepStyleComposition from './components/DeepStyleComposition';
import HeadersFlexbox from './components/HeadersFlexbox';
import DynamicStylingUsingProps from './components/DynamicStylingUsingProps';
import Animation from './components/Animation';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/header">HeadersFlexbox</Link></li>
        <li><Link to="/animation">Animation</Link></li>
        <li><Link to="/header">HeadersFlexbox</Link></li>
        <li><Link to="/basicGlitz">BasicGlitz</Link></li>
        <li><Link to="/boxmodel">Boxmodel</Link></li>
        <li><Link to="/deepStyleComposition">DeepStyleComposition</Link></li>
        <li><Link to="/pseudoelement">Pseudoelement</Link></li>
        <li><Link to="/dynamicStylingUsingProps">DynamicStylingUsingProps</Link></li>
      </ul> 
      <Route exact path="/" component={Home}/>
      <Route path="/animation" component={Animation} />
      <Route path="/header" component={HeadersFlexbox} />
      <Route path="/basicGlitz" component={BasicGlitz} />
      <Route path="/boxmodel" component={Boxmodel} />
      <Route path="/deepStyleComposition" component={DeepStyleComposition} />
      <Route path="/pseudoelement" component={Pseudoelement} />
      <Route path="/dynamicStylingUsingProps" component={DynamicStylingUsingProps} success color="blue"/>
      <DynamicStylingUsingProps success color="blue"/>
    </Router>
  );
}

export default App;
