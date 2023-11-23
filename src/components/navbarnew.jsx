import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/cscp.png';

function Nav() {
    return (
        <div className='flex flex-row justify-center nav'>
            <div>
                About
            </div>
            <div>
                Team
            </div>
            <div>
                Contact
            </div>
        </div>
    )
}

export default Nav;