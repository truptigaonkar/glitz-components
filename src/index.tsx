import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlitzClient } from '@glitz/core';
import { GlitzProvider } from '@glitz/react';
import transformers from '@glitz/transformers';
import './index.css';

const glitz = new GlitzClient({ transformer: transformers() });

ReactDOM.render(
  <GlitzProvider glitz={glitz}>
    <App />
  </GlitzProvider>,
  document.getElementById('root')
);

