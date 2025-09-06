import React from 'react'
import Headding from './Headding'

const Input = ({type,placeholder,className,title}) => {
  return (
    <>
    <form action="post">
        <Headding as={'h3'} text={title} className={"text-[16px] font-bold text-menuHover"}/>
<input type={type} placeholder={placeholder} className={`w-[500px] border-b-1 outline-0 border-[#F0F0F0] text-[14px] py-4 ${className}`}/>

    </form>
    </>
  )
}

export default Input