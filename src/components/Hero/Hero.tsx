import HeroPng from '../../assets/hero.png';

const Hero = () => {
  return (
    <div className='min-h-[550px] sm:min-h-[600px] bg-lightBlue flex justify-center items-center'>
      <div className='container pb-8 sm:pb-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          {/* text content section */}
          <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left'>
            <h1
              data-aos='zoom-out'
              data-aos-delay='200'
              className='text-8xl lg:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive'
            >
              Rice
              <span className='text-3xl font-sans text-dark'>{' Bowl'}</span>
            </h1>
            <p
              data-aos='fade'
              data-aos-delay='300'
              className='text-sm text-dark font-sans'
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium possimus asperiores sapiente vero corrupti labore
              vitae eaque dignissimos porro nemo quibusdam ipsa repellat
              obcaecati eum, doloribus eveniet exercitationem! Facere, id.
              Sequi, alias eveniet. Dolorem in similique incidunt nisi officiis
              illo! Ullam atque perspiciatis soluta hic, porro ut laudantium
              harum, expedita omnis tenetur nesciunt maxime eum modi debitis,
              pariatur ipsam est.
            </p>
            <div data-aos='fade-up' data-aos-delay='400' data-aos-offset='0'>
              <button className='primary-btn'>View Our Menu</button>
            </div>
          </div>
          {/* Hero image section */}
          <div data-aos='zoom-in' data-aos-duration='500' className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
            <img
              src={HeroPng}
              className='max-w-[450px] w-full mx-auto sm:scale-125 shadow-1'
            />
            <div className='bg-primary p-3 rounded-xl absolute top-10 left-10 hidden md:block text-white'>
              <h1>Fresh Food</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
