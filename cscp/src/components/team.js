import React from 'react';
import MyImage from '../assets/images/johnny.jpg';
import MyImage2 from "../assets/images/alyx.jpg";
import MyImage3 from "../assets/images/mia.jpg";

function Team(){
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
                        <div className='team-item'>
                            <img src={MyImage2} className='team-img' alt="pic" />
                            <h3>ARJUN SREEKUMAR</h3>
                            <div className ="team-info">
                                <p>Main Vazha</p>
                                <p>aka babuvazha. Legendary status.</p>
                                <ul className ='team-icon'>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    <div className='col-sm-6 col-md-4'>

                        <div className='team-item'>
                            <img src={MyImage3} className='team-img' alt="pic" />
                            <h3>ARJUN SREEKUMAR</h3>
                            <div className ="team-info">
                                <p>Main Vazha</p>
                                <p>aka babuvazha. Legendary status.</p>
                                <ul className ='team-icon'>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                </ul>
                            </div>
                        </div> 
                        </div>
                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item'>
                            <img src={MyImage} className='team-img' alt="pic" />
                            <h3>ARJUN SREEKUMAR</h3>
                            <div className ="team-info">
                                <p>Main Vazha</p>
                                <p>aka babuvazha. Legendary status.</p>
                                <ul className ='team-icon'>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className='row'>    
                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item'>
                            <img src={MyImage2} className='team-img' alt="pic" />
                            <h3>ARJUN SREEKUMAR</h3>
                            <div className ="team-info">
                                <p>Main Vazha</p>
                                <p>aka babuvazha. Legendary status.</p>
                                <ul className ='team-icon'>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item'>
                            <img src={MyImage3} className='team-img' alt="pic" />
                            <h3>ARJUN SREEKUMAR</h3>
                            <div className ="team-info">
                                <p>Main Vazha</p>
                                <p>aka babuvazha. Legendary status.</p>
                                <ul className ='team-icon'>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item'>
                            <img src={MyImage} className='team-img' alt="pic" />
                            <h3>ARJUN SREEKUMAR</h3>
                            <div className ="team-info">
                                <p>Main Vazha</p>
                                <p>aka babuvazha. Legendary status.</p>
                                <ul className ='team-icon'>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
                                    <li><a href="#" className =""><i className="fa fa-"></i></a></li>
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