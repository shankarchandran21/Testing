import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Apps from './Apps';
import Context from './context/Context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
   <Context>
    <Apps />
  </Context>
 </BrowserRouter>
);

