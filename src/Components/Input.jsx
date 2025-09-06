import React from 'react'


const Input = ({type,placeholder,className,title}) => {
  return (
    <>
   
     
        <label className={` block${className}`}>{title}</label>
       
<input type={type} placeholder={placeholder} className={`w-[500px] border-b-1 outline-0 border-[#F0F0F0] text-[14px] py-4 `}/>

 
    </>
  )
}

export default Input