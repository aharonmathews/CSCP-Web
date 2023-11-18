import React from 'react';
import {Parallax} from 'react-parallax';
import lap from '../../assets/images/lap1.jpg'


function Img(){
    return (
        <Parallax className='image' bgImage={lap} strength={300}>
            <div className='content'>
                <span className='text'>Experience the depth of Programming</span>
            </div>
        </Parallax>
    )
}

export default Img;