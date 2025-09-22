import React from 'react'
import Headding from './Headding'


const Input = ({type,placeholder,divclassName,className,title,icon,value}) => {
  return (
    <>
   
     <div className={divclassName}>
      <Headding as={"h3"} text={title} className={className}/>
       <div className="flex items-center">
<input type={type} placeholder={placeholder} value={value}  className={`w-[500px] border-b-1 outline-0 border-[#F0F0F0] text-[14px] py-4 `}/>
     <Headding as={"h3"} text={icon}/>
     </div>
     </div>  

 
    </>
  )
}

export default Input