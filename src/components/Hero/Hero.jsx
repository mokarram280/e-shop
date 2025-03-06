import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../Shared/Button';

const HeroSlide = [
    {
        id: 1,
        image: '/src/assets/hero/headphone.png',
        subtitle: 'Beats Solo',
        title: 'Wireless',
        title2: 'Headphone',
    },
    {
        id: 2,
        image: '/src/assets/hero/vr.png',
        subtitle: 'Beats Solo',
        title: 'Wireless',
        title2: 'Virtual',
    },
    {
        id: 3,
        image: '/src/assets/hero/macbook.png',
        subtitle: 'Beats Solo',
        title: 'Wireless',
        title2: 'Laptops',
    }
];

const Hero = ({handleOrderPopup}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
  return (
    <div className='container mx-auto px-8'>
        <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[600px] bg-gradient-to-r from-gray-300/80 to-gray-100 dark:from-gray-900 dark:to-gray-700 dark:text-white flex items-center justify-center'>
            {/* hero section */}
            <div className='container mx-auto px-8 pb-8 sm:pb-0'>
            <Slider {...settings}>
                {HeroSlide.map((data)=>(
                    <div key={data.id}>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            {/* text content section */}
                            <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                <h2 
                                data-aos='zoom-in'
                                data-aos-duration='800'
                                data-aos-once='true'
                                className='text-2xl sm:text-6xl lg:text-2xl font-bold'>
                                {data.subtitle}</h2>
                                <h2 
                                data-aos='zoom-in'
                                data-aos-duration='800'
                                data-aos-once='true'
                                className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h2>
                                <h2 
                                data-aos='zoom-in'
                                data-aos-duration='800'
                                data-aos-once='true'
                                className='text-white dark:text-white/5 text-5xl sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h2>
                                <div
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='800'
                                data-aos-dalay='300'
                                >
                                <Button handler={handleOrderPopup} text='Shop By Category' bgColor='bg-primary' textColor='text-white' />
                                </div>
                            </div>
                            {/* image section */}
                            <div className='order-1 sm:order-2'>
                                <div
                                data-aos='zoom-in'
                                data-aos-duration='800'
                                data-aos-once='true'
                                className='relative z-10'
                                >
                                    <img src={data.image} alt={data.title2} className='w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40' />
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

export default Hero;