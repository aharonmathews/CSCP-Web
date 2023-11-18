import React from 'react';
import {Parallax} from 'react-parallax';
import code from '../../assets/images/code1.jpg'


function Img(){
    return (
        <Parallax className='image' bgImage={code} strength={300}>
            <div className='content'>
                <span className='text'>Experience the depth of Programming</span>
            </div>
        </Parallax>
    )
}

export default Img;