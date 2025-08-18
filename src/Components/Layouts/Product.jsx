import React from 'react'
import Image from '../Image'
import Tag from './Tag'
import Headding from '../Headding'
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
const Product = ({productImg,tag}) => {
  return (
   <>
   <div className="relative group">
    <Image imgsrc={productImg}/>
    <Tag tagtext={tag} className={"absolute top-5 left-5"}/>
    <div className="pt-5 absolute top-[55%] opacity-0 group-hover:opacity-100 duration-500 left-0 right-0 bottom-0 bg-white ">
        <div className="flex gap-x-[15px] items-center justify-end pr-7.5">
<Headding as={"p"} text={"Add to Wish List"} className={"text-menuText text-[16px]"}/>
<FaHeart/>
        </div>
        <div className="flex gap-x-[15px] items-center justify-end py-[21px] pr-7.5">
<Headding as={"p"} text={"Compare"} className={"text-menuText text-[16px]"}/>
<TbRefresh/>
        </div>
        <div className="flex gap-x-[15px] items-center justify-end pr-7.5">
<Headding as={"p"} text={"Add to Cart"} className={"text-black text-[16px]"}/>
<FaShoppingCart/>
        </div>
    </div>
   </div>
   </>
  )
}

export default Product