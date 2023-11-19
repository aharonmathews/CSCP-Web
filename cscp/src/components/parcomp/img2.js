import React from 'react';
import {Parallax,Background} from 'react-parallax';
import code from '../../assets/images/code1.jpg'



function Img(){
    return (
        <Parallax strength={500}>
            <Background className='image'>
                <img className='image' src={code} alt='new' />
            </Background>
            <div className='content'>
                <div className='text-content'>Experience the depth of Programming</div>
            </div>
        </Parallax>
    )
}

export default Img;