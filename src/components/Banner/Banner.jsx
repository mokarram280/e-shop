import React from 'react';

const Banner = ({ data }) => {
  return (
    <div className='min-h-[550px] flex items-center justify-center'>
        <div className='container mx-auto px-8'>
            <div style={{ backgroundColor: data.bgColor }} className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
                {/* first col */}
                <div className='p-6 sm:p-8'>
                    <p data-aos='slide-right' data-aos-duration='800' className='text-sm'>{data.discount}</p>
                    <h2 data-aos='zoom-in' data-aos-duration='800' className='text-4xl lg:text-7xl font-bold uppercase'>{data.title}</h2>
                    <p data-aos='fade-up' data-aos-duration='800' className='text-sm'>{data.date}</p>
                </div>
                {/* second col */}
                <div data-aos='zoom-in' data-aos-duration='800' className='h-full flex items-center'>
                    <img src={data.image} alt="headphone" className='scale-125 w-[250px] md:w-[340px] drop-shadow-xl mx-auto object-cover' />
                </div>
                {/* third col */}
                <div className='flex flex-col justify-center gap-6 p-6 sm:p-8'>
                    <p data-aos='slide-left' data-aos-duration='800' className='text-xl font-bold'>{data.title2}</p>
                    <p data-aos='zoom-in' data-aos-duration='800' className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
                    <p data-aos='fade-up' data-aos-duration='800' className='text-sm tracking-wide leading-5'>{data.title4}</p>
                    <div
                    data-aos='fade-up' data-aos-duration='800'
                    >
                        <button style={{color: data.bgColor}} className='bg-white font-semibold px-4 py-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-200'>Shop Now</button>
                    </div>
                </div>
            </div>
          </div>
    </div>
  );
};

export default Banner;