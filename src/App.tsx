import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Banner from './components/Banner/Banner';
import OurMenu from './components/OurMenu/OurMenu';
import Testimonials from './components/Testimonials/Testimonials';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  React.useEffect(() => {
    AOS.init(
      {
        offset: 100,
        duration: 700,
        easing: 'ease-in',
        delay: 100
      }
    );
    AOS.refresh();
  }, []);

  return (
    <main className='overflow-x-hidden'>
      <NavBar />
      <Hero />
      <Banner />
      <OurMenu />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </main>
  );
};

export default App;
