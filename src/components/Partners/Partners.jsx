import React from 'react';

const Partners = () => {
  return (
    <div data-aos='zoom-out' data-aos-duration='800' className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10'>
        <div className='container mx-auto px-8'>
            <div className='grid grid-cols-5 gap-3 place-items-center opacity-50'>
                <img src="/src/assets/brand/br-1.png" alt="brand" className='w-[80px] dark:invert' />
                <img src="/src/assets/brand/br-2.png" alt="brand" className='w-[80px] dark:invert' />
                <img src="/src/assets/brand/br-3.png" alt="brand" className='w-[80px] dark:invert' />
                <img src="/src/assets/brand/br-4.png" alt="brand" className='w-[80px] dark:invert' />
                <img src="/src/assets/brand/br-5.png" alt="brand" className='w-[80px] dark:invert' />
            </div>
        </div>
    </div>
  );
};

export default Partners;