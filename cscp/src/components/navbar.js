import React from 'react';
import {Link } from 'react-scroll';

function Nav(){
    return (
        <div>
            <nav className=''>
                <ul className='static flex flex-row bg-[#474444] justify-around items-start text-white'>
                    <li>
                    <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
                        Section 1
                    </Link>
                    </li>
                    <li>
                    <Link activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
                        Section 2
                    </Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Nav;