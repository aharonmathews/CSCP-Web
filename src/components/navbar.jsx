import React from 'react';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <div>
      <nav className='fixed backdrop-filter backdrop-blur-lg h-15 w-full top-0 bg-transparent z-50'>
        <ul className='flex flex-row justify-between items-center text-white w-full px-4'>
          <div className="flex flex-row space-x-4">
            <li>
              <Link className='text-center text-2xl font-semibold text-[#BBE1FA] hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link className='text-center text-2xl font-semibold text-[#BBE1FA] hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
                TEAM
              </Link>
            </li>
          </div>
          <li className="flex-grow text-center">
            <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
              <div className='inline-block font-jars text-4xl text-[#0F4C75] bg-[#BBE1FA] m-1 px-1 rounded-lg'>
                CSCP
              </div>
            </Link>
          </li>
          <li>
            <Link className='text-center text-2xl font-semibold text-[#BBE1FA] hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section4" spy={true} smooth={true} offset={-70} duration={500}>
              CONTACT
            </Link>
          </li>
        </ul>
        <div className='h-[2px] bg-[#FFE6E6] w-full'></div>
      </nav>
    </div>
  );
}

export default Nav;
