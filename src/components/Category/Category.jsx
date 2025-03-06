import React from 'react';
import Button from '../Shared/Button';

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container mx-auto px-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* first col */}
                <div 
                data-aos='slide-left'
                data-aos-duration='600'
                className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[350px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='mb-[2px] text-2xl font-semibold'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-3'>Earphone</p>
                            <Button text='Browse' bgColor={'bg-primary'} textColor={'text-white'} />
                        </div>
                    </div>
                    <img src="/src/assets/category/earphone.png" alt="earphone" className='w-[320px] absolute bottom-0' />
                </div>
                {/* second col */}
                <div
                data-aos='slide-left'
                data-aos-duration='600' 
                className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[350px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='mb-[2px] text-2xl font-semibold'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-3'>Gadget</p>
                            <Button text='Browse' bgColor={'bg-white'} textColor={'text-brandYellow'} />
                        </div>
                    </div>
                    <img src="/src/assets/category/watch.png" alt="watch" className='w-[320px] absolute -right-4 lg:top-[40px]' />
                </div>
                {/* third col */}
                <div
                data-aos='slide-left'
                data-aos-duration='600' 
                className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[350px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='mb-[2px] text-2xl font-semibold'>With</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-3'>Laptop</p>
                            <Button text='Browse' bgColor={'bg-white'} textColor={'text-primary'} />
                        </div>
                    </div>
                    <img src="/src/assets/category/macbook.png" alt="macbook" className='w-[320px] absolute top-1/2 -translate-y-1/2 -right-0' />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Category;