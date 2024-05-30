import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import './parallaxStyles.css';


function Main(){
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
    <section className="banner h-screen  mt-20 mb-20" id="home">
      
      <Container className="text-center text-[#BBE1FA]">
        <div className="">
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
              <span className=" tagline text-5xl text-[#0F4C75] font-extrabold font-jersey bg-[#BBE1FA] rounded-md">CYBER SECURITY & COMPETITIVE PROGRAMMING</span>
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
    </section>
  )
}

export default Main;
