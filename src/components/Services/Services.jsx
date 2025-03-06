import React from 'react';
import { FaCarSide, FaWallet, FaCheckCircle } from 'react-icons/fa';
import { BiSupport } from "react-icons/bi";

const ServicesData = [
    {
        id: 1,
        icon: <FaCarSide />,
        title: 'Free Shipping',
        description: 'Free Shipping On All Order',
        aosDelay: '0'
    },
    {
        id: 2,
        icon: <FaCheckCircle />,
        title: 'Safe Money',
        description: '30 Days Money Back',
        aosDelay: '200'
    },
    {
        id: 3,
        icon: <FaWallet />,
        title: 'Secure Payment',
        description: 'All Payment Secure',
        aosDelay: '400'
    },
    {
        id: 4,
        icon: <BiSupport />,
        title: 'Online Support 24/7',
        description: 'Technical Support 24/7',
        aosDelay: '600'
    },
];

const Services = () => {
  return (
    <div>
        <div className='container mx-auto px-16 sm:px-8 my-14 lg:my-20'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 space-y-6'>
                {ServicesData.map((data)=>(
                    <div 
                    data-aos='fade-up'
                    data-aos-delay={data.aosDelay}
                    data-aos-duration='500'
                    key={data.id} 
                    className='flex flex-col sm:flex-row items-start gap-4'>
                        <span className='text-4xl lg:text-5xl text-primary'>{data.icon}</span>
                        <div>
                            <p className='lg:text-xl font-bold'>{data.title}</p>
                            <p className='text-sm text-gray-400'>{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Services;