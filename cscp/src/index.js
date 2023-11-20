import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './components/main';
import Navbar from './components/navbar';
import Parallax from './components/parallax';
import Contact from './components/ContactPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='background'>
  <React.StrictMode>
    <Navbar />
    
    <section id="section1">

      <Main />
    </section>
    <section id="section2">
      <Parallax />
    </section>
    <section id="section3">
      <Contact />
    </section>
    
    
  </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();