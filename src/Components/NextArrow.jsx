import React from 'react'

import { FaArrowAltCircleRight } from "react-icons/fa";
const NextArrow = (props) => {
     const { onClick } = props;
  return (
    
    <div
      
      className='absolute top-1/2 right-3 -translate-y-1/2  text-3xl'
      onClick={onClick}
    > <FaArrowAltCircleRight className='fill-neutral-500 cursor-pointer'/></div>
  );
}

export default NextArrow