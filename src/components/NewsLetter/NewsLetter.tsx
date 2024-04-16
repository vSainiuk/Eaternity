import BgPng from '../../assets/food2-plate.png';

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundSize: 'contain',
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
};

const NewsLetter = () => {
  return (
    <div className=' bg-primary text-white' style={backgroundStyle}>
      <div className='container bg-black/60 sm:bg-transparent py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8'>
          {/* text section */}
          <div className=' space-y-4 text-center sm:text-left'>
            <h1
              data-aos='fade-up'
              className=' text-2xl sm:text-3xl font-semibold text-white/90'
            >
              Ready to get Started
            </h1>
            <p data-aos='fade-up' data-aos-delay='200'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              labore tempora, id reprehenderit quo nobis itaque nostrum quidem
              ipsum, voluptates adipisci saepe sunt ab necessitatibus beatae?
              Nisi natus officiis harum!
            </p>
          </div>

          {/* input section */}
          <div
            data-aos='fade-up'
            data-aos-delay='400'
            className=' text-center sm:text-left'
          >
            <input
              type='text'
              placeholder='Enter your email address'
              className='max-w-[400px] px-4 py-2 rounded-l-md ring-0 focus:outline-none text-dark'
            />
            <button className='bg-white text-primary px-4 py-2 rounded-r-md'>
              {' '}
              <span className='inline-block text-sm uppercase font-semibold'>
                Get Started
              </span>{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
