import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../../assets/logo.png';

const FooterLinks = [
  {
    title: 'Home',
    link: '#',
  },
  {
    title: 'About',
    link: '#',
  },
  {
    title: 'Contacts',
    link: '#',
  },
  {
    title: 'Blog',
    link: '#',
  },
];

const Footer = () => {
  return (
    <div>
      <div className='container grid md:grid-cols-3 pb-20 pt-5'>
        {/* Company details */}
        <div className='py-8 px-4'>
          <img src={Logo} alt='Logo' className='w-36' />
          <div className=' space-y-5'>
            <p className='pt-4 opacity-60'>{'A cozy place for everyone :)'}</p>
            <div>
              <button className='primary-btn'>View YouTube chanel</button>
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
          <div className='py-8 px-4'>
            <h1 className='text-xl font-semibold sm:text-left mb-5'>
              Important links
            </h1>
            <ul className='space-y-5'>
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Second column links */}
          <div className='py-8 px-4'>
            <h1 className='text-xl font-semibold sm:text-left mb-5'>
              Quick links
            </h1>
            <ul className='space-y-5'>
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company address section  */}
          <div className='py-8 px-4 col-span-2 sm:col-auto'>
            <h1 className='text-xl font-semibold sm:text-left mb-5'>Address</h1>
            <div className='flex items-center gap-3 mt-6'>
              <a href='#'>
                <FaInstagram className='text-3xl hover:text-primary duration-300' />
              </a>
              <a href='#'>
                <FaFacebook className='text-3xl hover:text-primary duration-300' />
              </a>
              <a href='#'>
                <FaLinkedin className='text-3xl hover:text-primary duration-300' />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright section */}
      <div className='bg-gray-200'>
        <div className='text-sx md:text-sm container py-4 flex justify-between'>
          <p>&copy; 2024 All rights reserved</p>
          <div className='flex justify-center items-center gap-3'>
            <a href='#'>Privacy</a>
            <a href='#'>Accessibility</a>
            <a href='#'>Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
