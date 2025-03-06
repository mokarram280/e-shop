import React from 'react';

const Button = ({text, bgColor, textColor, handler = () => {}}) => {
  return (
    <button onClick={handler} className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 rounded-full px-8 py-2 relative z-10`}>{text}</button>
  );
};

export default Button;