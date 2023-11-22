import {useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

import MyImage2 from '../assets/code1.jpg';


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
      <div className="container">
        <div className="flex flex-wrap justify-center space-x-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="">
              <div className="team-item mainelement hover:text-[#f5dddd] rounded-md hover:bg-[#53687e] bg-[#c2b2b4]" data-aos="flip-left">
                  <img src={member.image} className="bg-[#53687e] h-12 w-12 py-1 px-1 m-auto rounded-full" alt="pic" height={100} width={100} />
                
                <h3 className='hover:text-black mainelement-hover:text-[#c2b2b4] text-[#53687e] mt-5 mb-0 mx-0'>{member.name}</h3>
                <div className="block mb-0 hover:text-black">
                  <p className=''>{member.role}</p>
                  <p className=''>{member.description}</p>
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
    );
}

export default Team;
