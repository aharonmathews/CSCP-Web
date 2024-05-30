import { useEffect, useRef } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

import MyImage2 from '../assets/code1.jpg';

function Team() {
  const teamRef = useRef(null);

  useEffect(() => {
    const teamItems = teamRef.current.querySelectorAll('.team-item');

    teamItems.forEach(item => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      teamItems.forEach(item => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const handleMouseEnter = (event) => {
    event.currentTarget.classList.add('flip-left');
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.classList.remove('flip-left');
  };

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
    <div className="my-11">
      <div className='text-[#9AC8CD] text-5xl text-center font-bold'>
        TEAM
      </div>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4 " ref={teamRef}>
        {teamMembers.map((member, index) => (
          <div key={index} className="">
            <div className="h-80 w-60 rounded-md m-auto p-8 hover:bg-[#BBE1FA] bg-[#3282B8]">
              <img src={member.image} className="bg-[#9AC8CD] h-12 w-12 py-1 px-1 m-auto rounded-full" alt="pic" height={100} width={100} />
              <h3 className='text-black mt-5 mb-0 mx-0 font-bold text-center'>{member.name}</h3>
              <div className="mb-0 text-black text-center">
                <p className='font-semibold'>{member.role}</p>
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