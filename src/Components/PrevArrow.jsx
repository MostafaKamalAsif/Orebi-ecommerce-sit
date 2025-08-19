import React from 'react'
import Prev_arrow from "/src/assets/Previous_button.png"
import Image from './Image';
const PrevArrow = (props) => {
    const { onClick } = props;
  return (
    <>
    <div
      
      className='absolute top-[43%] left-6 translate-y-[-50%]  z-10'
      onClick={onClick}
    > 
    <Image imgsrc={Prev_arrow} className={"cursor-pointer w-full "}/>
    </div>
        </>
  );
}

export default PrevArrow