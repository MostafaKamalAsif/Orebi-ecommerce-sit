import React, { useEffect, useRef, useState } from 'react'
import Image from '../Image'
import Tag from '/src/Components/Tag'
import Headding from '../Headding'
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import  {addtocart}  from '../../Slices/AddToCart';
import { useDispatch} from 'react-redux';



const Product = ({productImg,tag,ProductName,ProductPrice,text,className,imgclassName}) => {
        let dispatch=useDispatch()
        let handelAddCart=()=>{
               dispatch(addtocart({
                title : ProductName,
                img:productImg ,
                price:ProductPrice,
                quantity:1,
               
               }
         
        ));

                 
        }
        let cartcolorRef=useRef()

   let [blackhart, setredhart]=useState(false)     
   const handelColorbtn=(()=>{
        setredhart(!blackhart)
   })
      
  return (
   <>
   <div className={`${className} cursor-pointer`}>
        <div className="relative group">
    <Image imgsrc={productImg} className={imgclassName}/>
    <Tag tagtext={tag} className={"absolute top-5 left-5"}/>
    <div className="pt-5 absolute top-[53%] opacity-0 group-hover:opacity-100 duration-700 left-0 right-0 bottom-0 bg-white ">
        <div className="flex gap-x-[15px] items-center justify-end pr-7.5 hover:text-black hover:font-bold duration-500 ">
<Headding as={"p"} text={"Add to Wish List"} className={"text-menuText text-[16px]"}/>
<FaHeart  onClick={handelColorbtn} className={ `${blackhart?"text-red-500": ""}`}/>

        </div>
        <div className="flex gap-x-[15px] items-center justify-end py-[21px] pr-7.5 hover:text-black hover:font-bold duration-500">
<Headding as={"p"} text={"Compare"} className={"text-menuText text-[16px]"}/>
<TbRefresh/>
        </div>
        <div className="flex gap-x-[15px] items-center justify-end pr-7.5 relative hover:text-black hover:font-bold  duration-500" onClick={ 
  handelAddCart}>
<Headding as={"p"} text={"Add to Cart"} className={"text-black text-[16px]"}/>
<FaShoppingCart />

        </div>
    </div>
    </div>
    <div className="flex items-center justify-between  pt-6 mb-10">
        <Headding as={"h3"} text={ProductName} className={"text-xl w-[79%]  font-bold text-[#262626] truncate "}/>
        <Headding as={"h3"} text={`$${ProductPrice}`} className={" w-[19%] text-menuText "} />
    </div>
    <Headding as={"h3"} text={text} className={" text-menuText"}/>
   </div>
   


   </>
  )
}

export default Product