import Slider from 'react-slick';
import { MenuData } from './MenuData';

const OurMenu = () => {
  const settings = {
    dots: true,
    arrows: false,
    // infinite: true,
    speed: 700,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='py-16 bg-primary text-white'>
      <div className='container'>
        {/* Header section */}
        <div className='space-y-5'>
          <h1 data-aos='fade-up' className='text-center text-4xl font-bold'>
            Our Menu
          </h1>
          <div
            data-aos='fade-up'
            data-aos-delay='200'
            className='text-center sm:max-w-sm mx-auto text-xs opacity-75'
          >
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            reprehenderit. Mollitia quisquam dolorem sint eos quo suscipit rerum
            magni voluptatibus veniam tempore, ducimus temporibus at ipsam
            aliquam sapiente! Reprehenderit, voluptatum! Iure voluptatem
            adipisci maiores tempora neque perspiciatis vitae, doloremque velit
            nam optio ipsam rerum.
          </div>
        </div>
        {/* Slider section */}
        <div data-aos='zoom-in'>
          <Slider {...settings}>
            {MenuData.map((menu) => (
              <div key={menu.id} className='my-8'>
                <div className='flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl'>
                  {/* Image section */}
                  <div className='mb-3 flex justify-center'>
                    <img
                      src={menu.img}
                      alt={menu.name}
                      className='rounded-full w-auto sm:max-w-[200px] md:max-w-[250px] shadow-1'
                    />
                  </div>
                  {/* text content section */}
                  <div className='flex flex-col gap-4 items-center'>
                    <div className='space-y-3 text-center'>
                      <h1 className='text-xl'>{menu.name}</h1>
                      <p className='text-3xl font-semibold'>
                        <span className='text-3xl font-cursive'>Only</span>{' '}
                        {menu.price}
                      </p>
                      <div className='hover:scale-110 duration-200'>
                        <a href='#'>Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
