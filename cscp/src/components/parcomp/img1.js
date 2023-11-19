import React from 'react';
import {Parallax, Background} from 'react-parallax';
import black from '../../assets/images/image1.jpg'



function Img(){
    return (
        <Parallax strength={500}>
            <Background className='image'>
                <img className='image' src={black} alt='new' />
            </Background>
            <div className='content'>
                <span className='text-content'>Experience the depth of Programming</span>
            </div>
        </Parallax>
    )
}

export default Img;