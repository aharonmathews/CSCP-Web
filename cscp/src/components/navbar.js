import React from 'react';
import Logo from '../assets/images/cscp.png';

function smoothScrollTo(targetId) {
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}

function Nav() {
  return (
    <div>
      <nav className='h-15 fixed w-full top-0 bg-white z-50'>
        <ul className='static flex flex-row justify-around items-center text-black'>
          <li>
            <a href="#" onClick={() => smoothScrollTo('section1')}>
              <img className='h-14 w-20' src={Logo} alt="Logo" />
            </a>
          </li>
          <li>
            <a href="#" onClick={() => smoothScrollTo('section2')} className='text-center text-2xl font-semibold'>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={() => smoothScrollTo('section3')} className='text-center text-2xl font-semibold'>
              Team
            </a>
          </li>
          <li>
            <a href="#" onClick={() => smoothScrollTo('section4')} className='text-center text-2xl font-semibold'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
