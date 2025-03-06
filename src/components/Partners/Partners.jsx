import React from 'react';
import P1 from '/src/assets/brand/br-1.png';
import P2 from '/src/assets/brand/br-2.png';
import P3 from '/src/assets/brand/br-3.png';
import P4 from '/src/assets/brand/br-4.png';
import P5 from '/src/assets/brand/br-5.png';

const Partners = () => {
  return (
    <div data-aos='zoom-out' data-aos-duration='800' className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10'>
        <div className='container mx-auto px-8'>
            <div className='grid grid-cols-5 gap-3 place-items-center opacity-50'>
                <img src={P1} alt="brand" className='w-[80px] dark:invert' />
                <img src={P2} alt="brand" className='w-[80px] dark:invert' />
                <img src={P3} alt="brand" className='w-[80px] dark:invert' />
                <img src={P4} alt="brand" className='w-[80px] dark:invert' />
                <img src={P5} alt="brand" className='w-[80px] dark:invert' />
            </div>
        </div>
    </div>
  );
};

export default Partners;