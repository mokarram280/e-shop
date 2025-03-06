import React from 'react';

const Heading = ({ title, subtitle }) => {
  return (
    <div className='text-center mb-10 max-w-[600px] space-y-2 mx-auto'>
        <h2 className='text-3xl lg:text-4xl font-bold'>{title}</h2>
        <p className='text-xs text-gray-400'>{subtitle}</p>
    </div>
  );
};

export default Heading;