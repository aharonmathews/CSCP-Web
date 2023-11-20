import React, { useEffect } from 'react';
import MyImage from '../assets/images/johnny.jpg';
import MyImage2 from "../assets/images/alyx.jpg";
import MyImage3 from "../assets/images/mia.jpg";
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Team(){
    useEffect(()=> {
        AOS.init({duration: 1000});
    })
    return(
        <section className="section-white">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h1 className='section-title'>
                             TEAM
                        </h1>
                        <p className='section-subtitle'>
                            These are our team members.
                        </p>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item' data-aos='flip-left'>
                            <img src={MyImage2} className='team-img' alt="pic" />
                            <h3>ARJUN SREEKUMAR</h3>
                            <div className ="team-info">
                                <p>Main Vazha</p>
                                <p>aka babuvazha. Legendary status.</p>
                                <ul className ='team-icon'>
                                    <li><a href="https://www.instagram.com/alyx.starworld/?hl=en" className =""><FaInstagram /></a></li>
                                    <li><a href="https://twitter.com/staralyx?lang=en" className =""><FaTwitter /></a></li>
                                    <li><a href="https://bd.linkedin.com/in/alyx-star-aa9924295" className =""><FaLinkedin /></a></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    <div className='col-sm-6 col-md-4'>

                        <div className='team-item' data-aos = 'flip-left'>
                            <img src={MyImage3} className='team-img' alt="pic" />
                            <h3>ARJUN SREEKUMAR</h3>
                            <div className ="team-info">
                                <p>Main Vazha</p>
                                <p>aka babuvazha. Legendary status.</p>
                                <ul className ='team-icon'>
                                <li><a href="https://www.instagram.com/miakhalifa/?hl=en" className =""><FaInstagram /></a></li>
                                    <li><a href="https://twitter.com/miakhalifa?lang=en" className =""><FaTwitter /></a></li>
                                    <li><a href="https://www.linkedin.com/checkpoint/challengesV2/AQE65g8aX9FvWAAAAYvmMfV0zs9FaoxXeT8QGJJQVWOy7TeFB-JEUUJbaq5z7UG0UQAJGhUR0q50CVQK7F2HUfntuy12ygTb8Q?original_referer=https%3A%2F%2Fwww.linkedin.com%2F" className =""><FaLinkedin /></a></li>
                                </ul>
                            </div>
                        </div> 
                        </div>
                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item' data-aos = 'flip-left'>
                            <img src={MyImage} className='team-img' alt="pic" />
                            <h3>ARJUN SREEKUMAR</h3>
                            <div className ="team-info">
                                <p>Main Vazha</p>
                                <p>aka babuvazha. Legendary status.</p>
                                <ul className ='team-icon'>
                                <li><a href="https://www.instagram.com/mosttalentedbaldman/?hl=en" className =""><FaInstagram /></a></li>
                                    <li><a href="https://twitter.com/johnnysins?lang=en" className =""><FaTwitter /></a></li>
                                    <li><a href="https://au.linkedin.com/in/johnny-sins-5b0725141" className =""><FaLinkedin /></a></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className='row'>    
                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item' data-aos='flip-left'>
                            <img src={MyImage2} className='team-img' alt="pic" />
                            <h3>ARJUN SREEKUMAR</h3>
                            <div className ="team-info">
                                <p>Main Vazha</p>
                                <p>aka babuvazha. Legendary status.</p>
                                <ul className ='team-icon'>
                                <li><a href="https://www.instagram.com/alyx.starworld/?hl=en" className =""><FaInstagram /></a></li>
                                    <li><a href="https://twitter.com/staralyx?lang=en" className =""><FaTwitter /></a></li>
                                    <li><a href="https://bd.linkedin.com/in/alyx-star-aa9924295" className =""><FaLinkedin /></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item' data-aos='flip-left'>
                            <img src={MyImage3} className='team-img' alt="pic" />
                            <h3>ARJUN SREEKUMAR</h3>
                            <div className ="team-info">
                                <p>Main Vazha</p>
                                <p>aka babuvazha. Legendary status.</p>
                                <ul className ='team-icon'>
                                <li><a href="https://www.instagram.com/miakhalifa/?hl=en" className =""><FaInstagram /></a></li>
                                    <li><a href="https://twitter.com/miakhalifa?lang=en" className =""><FaTwitter /></a></li>
                                    <li><a href="https://www.linkedin.com/checkpoint/challengesV2/AQE65g8aX9FvWAAAAYvmMfV0zs9FaoxXeT8QGJJQVWOy7TeFB-JEUUJbaq5z7UG0UQAJGhUR0q50CVQK7F2HUfntuy12ygTb8Q?original_referer=https%3A%2F%2Fwww.linkedin.com%2F" className =""><FaLinkedin /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item' data-aos='flip-left'>
                            <img src={MyImage} className='team-img' alt="pic" />
                            <h3>ARJUN SREEKUMAR</h3>
                            <div className ="team-info">
                                <p>Main Vazha</p>
                                <p>aka babuvazha. Legendary status.</p>
                                <ul className ='team-icon'>
                                <li><a href="https://www.instagram.com/mosttalentedbaldman/?hl=en" className =""><FaInstagram /></a></li>
                                    <li><a href="https://twitter.com/johnnysins?lang=en" className =""><FaTwitter /></a></li>
                                    <li><a href="https://au.linkedin.com/in/johnny-sins-5b0725141" className =""><FaLinkedin /></a></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Team;