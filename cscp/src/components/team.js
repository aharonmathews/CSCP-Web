import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';

import MyImage from '../assets/images/johnny.jpg';
import MyImage2 from '../assets/images/alyx.jpg';
import MyImage3 from '../assets/images/mia.jpg';

function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const teamMembers = [
    {
      name: 'ASWIN KRISHNA',
      image: MyImage2,
      role: 'Chairperson',
      description: 'aka babuvazha. Legendary status.',
      socials: [
        { icon: FaInstagram, link: 'https://www.instagram.com/alyx.starworld/?hl=en' },
        { icon: FaTwitter, link: 'https://twitter.com/staralyx?lang=en' },
        { icon: FaLinkedin, link: 'https://bd.linkedin.com/in/alyx-star-aa9924295' },
      ],
    },
    {
        name: 'AHARON MATHEWS',
        image: MyImage2,
        role: 'Vice Chairpersion',
        description: 'aka babuvazha. Legendary status.',
        socials: [
          { icon: FaInstagram, link: 'https://www.instagram.com/alyx.starworld/?hl=en' },
          { icon: FaTwitter, link: 'https://twitter.com/staralyx?lang=en' },
          { icon: FaLinkedin, link: 'https://bd.linkedin.com/in/alyx-star-aa9924295' },
        ],
      },
      {
        name: 'ARJUN SREEKUMAR',
        image: MyImage2,
        role: 'Webmaster',
        description: 'aka babuvazha. Legendary status.',
        socials: [
          { icon: FaInstagram, link: 'https://www.instagram.com/alyx.starworld/?hl=en' },
          { icon: FaTwitter, link: 'https://twitter.com/staralyx?lang=en' },
          { icon: FaLinkedin, link: 'https://bd.linkedin.com/in/alyx-star-aa9924295' },
        ],
      },
      {
        name: 'HARI VINAYAK',
        image: MyImage2,
        role: 'Publicity Head',
        description: 'aka babuvazha. Legendary status.',
        socials: [
          { icon: FaInstagram, link: 'https://www.instagram.com/alyx.starworld/?hl=en' },
          { icon: FaTwitter, link: 'https://twitter.com/staralyx?lang=en' },
          { icon: FaLinkedin, link: 'https://bd.linkedin.com/in/alyx-star-aa9924295' },
        ],
      },
      {
        name: 'IVIN MATHEW KURIAN',
        image: MyImage2,
        role: 'Event Head',
        description: 'aka babuvazha. Legendary status.',
        socials: [
          { icon: FaInstagram, link: 'https://www.instagram.com/alyx.starworld/?hl=en' },
          { icon: FaTwitter, link: 'https://twitter.com/staralyx?lang=en' },
          { icon: FaLinkedin, link: 'https://bd.linkedin.com/in/alyx-star-aa9924295' },
        ],
      },
      {
        name: 'DENIS GEORGE JOSEPH',
        image: MyImage2,
        role: 'Design and Media Head',
        description: 'aka babuvazha. Legendary status.',
        socials: [
          { icon: FaInstagram, link: 'https://www.instagram.com/alyx.starworld/?hl=en' },
          { icon: FaTwitter, link: 'https://twitter.com/staralyx?lang=en' },
          { icon: FaLinkedin, link: 'https://bd.linkedin.com/in/alyx-star-aa9924295' },
        ],
      },
      {
        name: 'RAHUL SAM',
        image: MyImage2,
        role: 'Treasurer',
        description: 'aka babuvazha. Legendary status.',
        socials: [
          { icon: FaInstagram, link: 'https://www.instagram.com/alyx.starworld/?hl=en' },
          { icon: FaTwitter, link: 'https://twitter.com/staralyx?lang=en' },
          { icon: FaLinkedin, link: 'https://bd.linkedin.com/in/alyx-star-aa9924295' },
        ],
      },



  ];

  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex col-sm-6 col-md-4 justify-center">
              <div className="team-item w-64" data-aos="flip-left">
                <LazyLoad height={200} offset={100}>
                  <img src={member.image} className="team-img" alt="pic" />
                </LazyLoad>
                <h3>{member.name}</h3>
                <div className="team-info">
                  <p>{member.role}</p>
                  <p>{member.description}</p>
                  <ul className="team-icon">
                    {member.socials.map((social, idx) => (
                      <li key={idx}>
                        <a href={social.link} className="">
                          <social.icon />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
