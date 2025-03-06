import React from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import Button from '../Shared/Button';

const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
    {orderPopup && (
        <div>
        <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm z-50'>
            <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md rounded-lg bg-white dark:bg-gray-900 dark:text-white duration-200'>
            {/* header section */}
                <div className='flex items-center justify-between'>
                    <h2 className='text-2xl font-semibold'>Order Now</h2>
                    <IoCloseCircleOutline onClick={handleOrderPopup} className='text-2xl cursor-pointer hover:text-primary hover:rotate-90 duration-200' />
                </div>
                {/* form section */}
                <div>
                    <input 
                    type="text"
                    placeholder='Name'
                    className='w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800 my-4 px-2 py-1'
                     />
                    <input 
                    type="email"
                    placeholder='Email'
                    className='w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800 my-4 px-2 py-1'
                     />
                    <input 
                    type="text"
                    placeholder='Address'
                    className='w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800 my-4 px-2 py-1'
                     />
                     <div className='flex justify-center font-semibold'>
                        <Button text={'Order Now'} bgColor={'bg-primary'} textColor={'text-white'} />
                     </div>
                </div>
            </div>
        </div>
    </div>
    )}
    </>
  );
};

export default Popup;