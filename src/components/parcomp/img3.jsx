import React from 'react';
import {Parallax,Background} from 'react-parallax';
import code2 from '../../assets/swim.jpg'



function Img(){
    return (
        <Parallax className=' items-center flex' strength={500}>
            <Background className='image'>
                <img className='image' src={code2} alt='new' />
            </Background>
            <div className='content text-3xl border-2'>
                <div className='bg-[#efeeee] p-1'>
                    Experience the depth of Programming
                </div>
            </div>
        </Parallax>
    )
}

export default Img;