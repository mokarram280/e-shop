import React from 'react';
import Button from '../Shared/Button';

const Category2 = () => {
  return (
    <div className='py-8'>
        <div className='container mx-auto px-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* first col */}
                <div 
                data-aos='slide-right'
                data-aos-duration='600'
                className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[350px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='mb-[2px] text-2xl font-semibold'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-3'>CONSOLE</p>
                            <Button text='Browse' bgColor={'bg-primary'} textColor={'text-white'} />
                        </div>
                    </div>
                    <img src="/src/assets/category/gaming.png" alt="gaming" className='w-[300px] absolute top-1/2 -translate-y-1/2 -right-0' />
                </div>
                {/* second col */}
                <div 
                data-aos='slide-right'
                data-aos-duration='600'
                className='py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen/70 text-white rounded-3xl relative h-[350px] flex items-start'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='mb-[2px] text-2xl font-semibold'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-3'>Oculus</p>
                            <Button text='Browse' bgColor={'bg-white'} textColor={'text-brandGreen'} />
                        </div>
                    </div>
                    <img src="/src/assets/category/vr.png" alt="vertual" className='w-[250px] absolute bottom-0' />
                </div>
                {/* third col */}
                <div 
                data-aos='slide-right'
                data-aos-duration='600'
                className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/70 text-white rounded-3xl relative h-[350px] flex items-start'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='mb-[2px] text-2xl font-semibold'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-3'>Speakers</p>
                            <Button text='Browse' bgColor={'bg-white'} textColor={'text-brandBlue'} />
                        </div>
                    </div>
                    <img src="/src/assets/category/speaker.png" alt="speaker" className='w-[200px] absolute bottom-0 right-0' />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Category2;