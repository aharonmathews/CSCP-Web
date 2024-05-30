
import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import Main from './components/main';
import Navbar from './components/navbar';
import Team from './components/team';
import Parallax from './components/parallax';
import Contact from './components/ContactPage';
import RandomDots from './components/randomDots';
function App() {
  
  return (
     <div>
      
      <RandomDots />
      <div id="section1">
      <Navbar />
      </div>

      <Main />
      
      {/*<div id="section3">
        <Parallax />
      </div>*/
      }
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
