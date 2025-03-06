import React from 'react';
import Heading from '../Shared/Heading';
import Blog1 from '/src/assets/blog/blog-1.jpg';
import Blog2 from '/src/assets/blog/blog-2.jpg';
import Blog3 from '/src/assets/blog/blog-3.jpg';

const BlogData = [
    {
        title: 'How to choose perfect smartwatch',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque unde dolores necessitatibus dolorum itaque soluta!',
        published: 'Jan 20, 2025 by Dilshed',
        img: Blog1,
        aosDelay: '0'
    },
    {
        title: 'How to choose perfect gadget',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque unde dolores necessitatibus dolorum itaque soluta!',
        published: 'Jan 20, 2025 by Satya',
        img: Blog2,
        aosDelay: '200'
    },
    {
        title: 'How to choose perfect VR headset',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque unde dolores necessitatibus dolorum itaque soluta!',
        published: 'Jan 20, 2025 by Sahir',
        img: Blog3,
        aosDelay: '400'
    }
];

const Blogs = () => {
  return (
    <div className='my-12'>
        <div className='container mx-auto px-8'>
            {/* heading section */}
            <Heading title='Recent News' subtitle={'Explore Our Blogs'} />
            {/* blog section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 lg:gap-7'>
                {BlogData.map((data,index)=>(
                    <div 
                    key={index} 
                    data-aos='fade-up'
                    data-aos-duration='800'
                    data-aos-delay={data.aosDelay}
                    className='bg-white dark:bg-gray-900'>
                        <div className='overflow-hidden rounded-2xl mb-2'>
                            <img src={data.img} alt={data.title} className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-300' />
                        </div>
                        <div className='space-y-2'>
                            <p className='text-xs text-gray-500'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.title}</p>
                            <p className='text-sm line-clamp-2 text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Blogs;