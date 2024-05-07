import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/cscp-new-removebg.png';

function Nav() {
  return (
    <div>
      <nav className='h-15 fixed w-full top-0 bg-transparent z-50'>
        <ul className='static flex flex-row justify-around items-center text-black'>
          <li>
            <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
              <img className='h-14 w-20' src={Logo} alt="Logo" />
            </Link>
          </li>
          <li>
            <Link className='text-center text-2xl font-semibold text-black' activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link className='text-center text-2xl font-semibold text-black hover:text-white hover:bg-black' activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
              TEAM
            </Link>
          </li>
          <li>
            <Link className='text-center text-2xl font-semibold text-black' activeClass="active" to="section4" spy={true} smooth={true} offset={-70} duration={500}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
