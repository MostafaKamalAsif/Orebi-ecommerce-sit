import React from 'react'

import Next_arrow from "/src/assets/Next_button.png"
import Image from './Image';
const NextArrow = (props) => {
     const { onClick } = props;
  return (
    
    <div
      
      className='absolute top-[34%] right-6 translate-y-[-50%]  '
      onClick={onClick}
    > 
    <Image imgsrc={Next_arrow} className={"cursor-pointer w-full"}/>
    </div>
  );
}

export default NextArrow