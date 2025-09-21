import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa6";
import logo from "/src/assets/logo.png";
import Image from '../Image';
const SmDevice = () => {
    let [open,setopen]=useState(false)
  return (
    <>
             
          <div className="sm:block md:hidden max-w-[580px] py-[30px] bg-white relative">
        
          <Flex className={"justify-around"}>
             <div className="">
              <Link to={"/"}>
                <Image imgsrc={logo} className={""} />
              </Link>
            </div>
            <div className=" " >
                <button className='md:hidden cursor-pointer' onClick={()=> setopen(!open)} >
                {open? <ImCross/>:<FaBars/> }
                </button> 
                { open&&
              <ul className="md:hidden absolute z-10 top-[80px] right-[10%] px-6 w-[150px]  text-menuText bg-neutral-100  text-14 gap-x-5">
                <Link
                  to={"/"}
                  className={` ${
                    location.pathname === "/"
                      ? "border-b-2  border-black text-black font-bold "
                      : ""
                  }`}
                >
                  <li className="py-1 hover:text-menuHover ">Home</li>
                </Link>

                <Link
                  to={"shop"}
                  className={`${
                    location.pathname === "/shop"
                      ? "border-b-2 border-black text-black font-bold "
                      : ""
                  }`}
                >
                  <li className="py-1 hover:text-menuHover "> Shop</li>
                </Link>

                <Link
                  to={"about"}
                  className={`${
                    location.pathname === "/about"
                      ? "border-b-2 border-black text-black font-bold "
                      : ""
                  }`}
                >
                  <li className="py-1 hover:text-menuHover ">About</li>
                </Link>

                <Link
                  to={"contacts"}
                  className={`${
                    location.pathname === "/contacts"
                      ? "border-b-2 border-black text-black font-bold "
                      : ""
                  }`}
                >
                  <li className="py-1 hover:text-menuHover">Contacts</li>
                </Link>

                <Link
                  to={"journal"}
                  className={`${
                    location.pathname === "/journal"
                      ? "border-b-2 border-black text-black font-bold  "
                      : ""
                  }`}
                >
                  <li className="py-1 hover:text-menuHover ">Journal</li>
                </Link>
              </ul>
              }
            </div>
              
          </Flex>
       
      </div>
    </>
  )
}

export default SmDevice