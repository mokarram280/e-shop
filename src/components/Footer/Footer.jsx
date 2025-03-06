import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaMobileScreen } from "react-icons/fa6";

const FooterLinks = [
    {
        title: 'Home',
        link: '/#'
    },
    {
        title: 'About',
        link: '/#about'
    },
    {
        title: 'Contact',
        link: '/#contact'
    },
    {
        title: 'Blog',
        link: '/#blog'
    }
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className='container mx-auto px-8'>
            <div className='grid grid-cols-3 pb-20 pt-5'>
                {/* company detailes */}
                <div className='py-8 px-4'>
                    <a href="#"
                    className='text-2xl sm:text-3xl text-primary font-bold tracking-widest uppercase'
                    >
                        Eshop
                    </a>
                    <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit distinctio vel sint odio.</p>
                    <p className='text-gray-500 mt-4'>Made with ❤️ by Mokaram Hossan</p>
                </div>
                {/* footer links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h2 className='text-xl font-bold sm:text-left mb-3'>Important Links</h2>
                        <ul className='space-y-3'>
                            {FooterLinks.map((data,index)=>(
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-400 duration-300'>
                                        {data.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* quick links */}
                    <div className='py-8 px-4'>
                        <h2 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h2>
                        <ul className='space-y-3'>
                            {FooterLinks.map((data,index)=>(
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 hover:text-black hover:dark:text-white dark:text-gray-400 duration-300'>
                                        {data.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* company adderss */}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h2 className='text-xl font-bold sm:text-left mb-3'>Address</h2>
                        <div>
                            <div className='flex items-center gap-3 mb-4'>
                                <FaLocationDot />
                                <p>Narsingdi, Dhaka</p> 
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaMobileScreen />
                                <p>+123 456 789</p> 
                            </div>
                            {/* social links */}
                            <div className='flex items-center gap-5 mt-4'>
                                <a href="#">
                                    <FaInstagram className='text-xl hover:text-primary duration-300' />
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-xl hover:text-primary duration-300' />
                                </a>
                                <a href="#">
                                    <FaLinkedin className='text-xl hover:text-primary duration-300' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;