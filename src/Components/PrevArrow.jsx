import React from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
const PrevArrow = (props) => {
    const { onClick } = props;
  return (
    <>
     <div  
          className='absolute top-1/2 left-3 -translate-y-1/2  text-3xl z-10'
          onClick={onClick}
        > < FaArrowAltCircleLeft className='fill-neutral-500 cursor-pointer'/></div></>
  );
}

export default PrevArrow