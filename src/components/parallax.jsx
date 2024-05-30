import React from 'react';
import { Parallax } from 'react-parallax';
import { Container, Button } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import './parallaxStyles.css';

import ImgOne from '../assets/bgimage.jpg'
import ImgTwo from '../assets/swim.jpg'
import ImgThree from '../assets/code1.jpg'

import { useState, useEffect } from "react";

const ParallaxComponent = () => {
    
        const [loopNum, setLoopNum] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const [text, setText] = useState('');
        const [delta, setDelta] = useState(300 - Math.random() * 100);
        const toRotate = [ "CyberSecurity", "Cryptography", "Competitive Programming" ];
        const period = 1000;
      
        useEffect(() => {
          let ticker = setInterval(() => {
            tick();
          }, delta);
      
          return () => { clearInterval(ticker) };
        }, [text])
      
        const tick = () => {
          let i = loopNum % toRotate.length;
          let fullText = toRotate[i];
          let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
      
          setText(updatedText);
      
          if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
          }
      
          if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
          } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
          }
        }
        
  return (
    <div className='w-full '>
      
        <Parallax bgImage={ImgOne} bgImageAlt="" strength={600}>
            <div className='w-full h-screen'>
                <Container className="text-center text-[#e5c4c4] ">
                    <div className="">
                    <TrackVisibility className='items-center text-center justify-center'>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                            <span className=" tagline text-5xl text-[#7469B6] font-extrabold font-jars">CYBER SECURITY & COMPETITIVE PROGRAMMING </span>
                            <div className="mt-9 h-12">
                                <span className="txt-rotate text-4xl" data-rotate='[ "CyberSecurity", "Cryptography", "Competitive Programming" ]'>
                                    <span className="wrap">
                                        {text}
                                    </span>
                                </span>
                            </div>
                            <p>Eda mone.</p>
                            <Button onClick={() => console.log('connect')} className="btn flex flex-row justify-center">Lets Connect<ArrowRightCircle size={25} /></Button>
                        </div>}
                    </TrackVisibility>
                    </div>
                </Container>
            </div>
        </Parallax>

        <Parallax bgImage={ImgTwo} bgImageAlt="the cat" strength={800}>
            <div className='w-full h-screen'></div>
        </Parallax>

        <Parallax bgImage={ImgThree} bgImageAlt="the cat" strength={800}>
            <div className='w-full h-screen'></div>
        </Parallax>
    </div>
  );
};

export default ParallaxComponent;
