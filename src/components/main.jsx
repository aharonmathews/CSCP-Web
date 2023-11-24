import { useState, useEffect } from "react";
import { Container} from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';


function Main(){
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(3);
  const toRotate = [ 'CyberSecurity','Competitive Programming','One Place', 'CSCP' ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, )

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
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div className="mt-12">
    <section className="banner" id="home">
      <Container className="text-center text-white">
            <TrackVisibility>
              {
                ({ isVisible }) =>
                  <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                    <h1 className="font-sans mb-4 mt-4">{``} 
                    <span className="txt-rotate" data-rotate='[ "CyberSecurity", "Cryptography", "Competitive Programming" ]'>
                      <span className="wrap">
                        {text}‎ 
                      </span>
                    </span>
                    </h1>
                      <p>Adipoli club.</p>
                      <button onClick={() => console.log('connect')} className="text-black bg-slate-600 w-64"><ArrowRightCircle size={25} />
                      </button>
                  </div>
              }
            </TrackVisibility>
      </Container>
    </section>
    </div>
  )
}

export default Main;