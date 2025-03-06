import React from 'react';
import Button from '../Shared/Button';

const ProductCard = ({ data }) => {
  return (
    <div className='mb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center'>
            {data.map((item)=>(
                <div 
                data-aos='fade-up'
                data-aos-duration='600'
                data-aos-delay={item.aosDelay}
                key={item.id} 
                className='group'>
                    <div className='relative'>
                        <img src={item.img} alt={item.title} className='h-[180px] w-[260px] object-cover rounded-md' />
                        {/* hover button */}
                        <div className='hidden group-hover:flex items-center justify-center absolute text-center h-full w-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:backdrop-blur-sm duration-500 group-hover:rounded-md'>
                            <Button text={'Add to Cart'} bgColor={'bg-primary'} textColor={'text-white'} />
                        </div>
                    </div>
                    <div className='leading-7'>
                        <h2 className='font-semibold'>{item.title}</h2>
                        <h2 className='font-bold'>${item.price}</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default ProductCard;