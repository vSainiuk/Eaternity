import React from 'react';
import Logo from '../../assets/logo.png';
import { Menu } from './Menu';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className='bg-lightBlue '>
      <div className='container py-2'>
        <div className='flex justify-between items-center'>
          {/* Logo section */}
          <div data-aos='fade-down' data-aos-once='true'>
            <a href='#'>
              <img src={Logo} alt='logo' className='w-36' />
            </a>
          </div>
          {/* Link section */}
          <div
            data-aos='fade-down'
            data-aos-once='true'
            data-aos-delay='300'
            className='hidden lg:flex justify-between items-center gap-4'
          >
            <ul className='hidden lg:flex justify-between items-center gap-4'>
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link} className='inline-block text-xl p-4'>
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile menu */}
          <div className='lg:hidden'>
            <button onClick={handleOpen}>
              <FaBars className='text-3xl' />
            </button>
          </div>
          {/* Dropdown menu */}
          {open && (
            <ul className='bg-white space-y-3 p-4 rounded-md shadow-md absolute right-10 top-24 z-50'>
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className='inline-block text-xl p-4 hover:bg-primary hover:text-white w-full rounded-md'
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
