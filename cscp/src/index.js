import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './components/main';
import Navbar from './components/navbar';
import Team from './components/team';
import Parallax from './components/parallax';
import Contact from './components/ContactPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />
    <div id="section1">
      <Main />
    </div>
    <div id="section2">
      <Team />
    </div>
    <div id="section3">
      <Parallax />
    </div>
    <div id="section4">
      <Contact />
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
