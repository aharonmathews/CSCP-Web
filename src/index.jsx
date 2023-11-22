import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
  import App from './App';

import Main from './components/main';
import Navbar from './components/navbar';
import Team from './components/team';
import Parallax from './components/parallax';
import Contact from './components/ContactPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />
    <Main />
    <div id="section1">
    <Team />      
    </div>
    <div id="section2">
      
    </div>
    <div id="section3">
      <Parallax />
    </div>
    <div id="section4">
      <Contact />
    </div>
  </div>
);


reportWebVitals();
