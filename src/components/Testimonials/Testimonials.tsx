import Slider from 'react-slick';
import { TestimonialsData } from './TestimonialsData';

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className='py-10 mb-10'>
      <div className='container'>
        {/* Header section */}
        <div className='mb-10'>
          <h1
            data-aos='fade-up'
            className='text-center text-4xl font-bold font-cursive'
          >
            Testimonials
          </h1>
        </div>
        {/* Slider section */}
        <div data-aos='zoom-in'>
          <Slider {...settings}>
            {TestimonialsData.map((testimonial) => (
              <div className='my-6'>
                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                  <div className='mb-4'>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='rounded-full w-20 h-20'
                    />
                  </div>

                  {/* content section */}
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3'>
                      <p className='text-xs text-gray-500'>
                        {testimonial.text}
                      </p>
                      <h1 className='text-xl font-bold text-black/80 font-cursive'>
                        {testimonial.name}
                      </h1>
                    </div>
                  </div>
                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
