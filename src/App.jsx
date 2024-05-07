
import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import Main from './components/main';
import Navbar from './components/navbar';
import Team from './components/team';
import Parallax from './components/parallax';
import Contact from './components/ContactPage';
function App() {
  
  return (
     <div>
      
      
      <div id="section1">
      <Navbar />
      </div>

      <Main className="mt-11" />
      <div id="section3">
        <Parallax />
      </div>
      <div id="section2">
      <Team />  
      </div>
      <div id="section4">
        <Contact />
      </div>
    </div>
  );
}

export default App;
