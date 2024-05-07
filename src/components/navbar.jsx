import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/cscp-new.png';

function Nav() {
  return (
    <div>
      <nav className='fixed backdrop-filter backdrop-blur-lg h-15 w-full top-0 bg-transparent z-50'>
        <ul className=' flex flex-row justify-around items-center text-white'>
          <li>
            <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
              <img className='h-14 w-20 rounded-3xl p-3' src={Logo} alt="Logo" />
            </Link>
          </li>
          <li>
            <Link className='text-center text-2xl font-semibold text-white hover:text-white hover:border-b-2 hover:border-b-white'  activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link className='text-center text-2xl font-semibold text-white hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
              TEAM
            </Link>
          </li>
          <li>
            <Link className='text-center text-2xl font-semibold text-white hover:text-white hover:border-b-2 hover:border-b-white'  activeClass="active" to="section4" spy={true} smooth={true} offset={-70} duration={500}>
              CONTACT
            </Link>
          </li>
        </ul>
        <div className='h-[2px] bg-[#FFE6E6] w-full'>

        </div>
      </nav>
    </div>
  );
}

export default Nav;
