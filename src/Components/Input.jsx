import React from 'react'
import Headding from './Headding'


const Input = ({type,placeholder,divclassName,className,title,icon}) => {
  return (
    <>
   
     <div className={divclassName}>
      <Headding as={"h3"} text={title} className={className}/>
       <div className="flex items-center">
<input type={type} placeholder={placeholder}   className={`w-[500px] border-b-1 outline-0 border-[#F0F0F0] text-[14px] py-4 `}/>
    {icon && <span>{icon}</span>}
     </div>
     </div>  

 
    </>
  )
}

export default Input