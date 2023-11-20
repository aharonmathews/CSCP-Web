import React from 'react';
import {Parallax,Background} from 'react-parallax';
import black from '../../assets/images/lap1.jpg'


function Img(){
    return (
        <Parallax strength={500}>
            <Background className='image'>
                <img className='image' src={black} alt='new' />
            </Background>
            <div className='content'>
                <span className='text'>Experience the depth of Programming</span>
            </div>
        </Parallax>
    )
}

export default Img;