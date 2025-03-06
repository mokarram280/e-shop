import React from 'react';
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DarkMode from './DarkMode';

const menuLinks = [
    {
        id: 1,
        name: 'Home',
        link:'/#'
    },
    {
        id: 2,
        name: 'Shop',
        link:'/#shop'
    },
    {
        id: 3,
        name: 'About',
        link:'/#about'
    },
    {
        id: 4,
        name: 'Blogs',
        link:'/#blog'
    }
];

const dropdownLinks = [
    {
        id: 1,
        name: 'Trending Products',
        link: '/#'
    },
    {
        id: 2,
        name: 'Best Selling',
        link: '/#'
    },
    {
        id: 3,
        name: 'Top Rated',
        link: '/#'
    }
];

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 px-8 sm:px-16'>
        <div className='py-4'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* logo */}
                <div className='flex items-center gap-4'>
                    <a href="#"
                    className='text-2xl sm:text-3xl text-primary font-bold tracking-widest uppercase'
                    >
                        Eshop
                    </a>
                    {/* menu items */}
                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-4'>
                            {menuLinks.map((data,index)=>(
                                <li key={index}>
                                    <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>{data.name}</a>
                                </li>
                            ))}
                            {/* dropdown */}
                            <li className='relative cursor-pointer group'>
                                <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 hover:text-black dark:hover:text-white py-2'>
                                    Quick Links
                                    <span>
                                        <MdOutlineKeyboardArrowDown className='group-hover:rotate-180 duration-300' />
                                    </span>
                                </a>
                                {/* dropdown links */}
                                <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 dark:text-white p-2'>
                                    <ul className='space-y-2'>
                                        {dropdownLinks.map((data,index)=>(
                                            <li key={index}>
                                                <a 
                                                className='text-gray-500 hover:text-black dark:hover:text-white font-semibold duration-200 w-full p-2 hover:bg-primary/20 inline-block rounded-md'
                                                href={data.link}>{data.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* right side */}
                <div className='flex justify-between items-center gap-4'>
                {/* search */}
                <div className='relative group hidden sm:block'>
                    <input 
                    type="text" 
                    placeholder='Search'
                    className='w-0 group-hover:w-[300px] transition-all duration-300 group-hover:border group-hover:border-gray-500 rounded-full px-3 py-1 focus:outline-none dark:border-gray-800 dark:bg-gray-900 group-hover:dark:bg-gray-800'
                     />
                    <FiSearch className='text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-300 group-hover:text-primary' />
                  </div>
                  {/* cart button */}
                  <button onClick={handleOrderPopup} className='relative p-3 cursor-pointer'>
                    <IoCartOutline className='text-xl text-gray-600 dark:text-gray-400' />
                    <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
                  </button>
                  {/* dark mode */}
                  <div>
                    <DarkMode />
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;