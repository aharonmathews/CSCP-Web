import React from 'react';
import {Link} from 'react-scroll';
import Logo from '../assets/images/cscp.png'

function Nav(){
    return (
        <div>
            <nav className='h-15'>
                <ul className='static flex flex-row bg-white justify-around items-center text-black'>
                    <li>
                    <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
                        <img className='h-20 w-20' src={Logo} />
                    </Link>
                    </li>
                    <li>
                    <Link className='text-center text-2xl font-semibold' activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
                         About
                    </Link>
                    </li>
                    
                    <li>
                    <Link className='text-center text-2xl font-semibold' activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
                         Team
                    </Link>
                    </li>
                    <li>
                    <Link className='text-center text-2xl font-semibold' activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}>
                        Contact
                    </Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Nav;