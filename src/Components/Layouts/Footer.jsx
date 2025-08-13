import React from "react";
import Container from '../Container'
import Flex from "../Flex";
import Image from "../Image";
import { Link } from "react-router-dom";
import Headding from "../Headding";
import logo from "/src/assets/OREBI.svg";
import { FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa";

const Fotter = () => {
  return (
    <div className="bg-[#F5F5F3]  ">
      <Container className={"py-[55px]"}>
        <Flex className={"justify-between"}>
   <div className="">
    
      <Headding as={"h3"} text={"MENU"} className={'text-[16px] font-bold text-black pb-4.5'}/>
              <ul className=" gap-y-2">
                <Link to={"/"}>
                  <li className="text-[#6D6D6D] text-[14px]">Home</li>
                </Link>

                <Link to={"shop"}>
                  <li className="text-[#6D6D6D] text-[14px]"> Shop</li>
                </Link>

                <Link to={"/about"}>
                  <li className="text-[#6D6D6D] text-[14px]">About</li>
                </Link>

                <Link to={"/contacts"}>
                  <li className="text-[#6D6D6D] text-[14px]">Contacts</li>
                </Link>

                <Link to={"/journal"}>
                  <li className="text-[#6D6D6D] text-[14px]">Journal</li>
                </Link>
              </ul>
    </div> 


 <div className="">
    <Headding as={"h3"} text={"SHOP"} className={'text-[16px] font-bold text-black pb-4.5'}/>
    <ul className=" gap-y-2">
      
      <Link> <li className="text-[#6D6D6D] text-[14px]">Category 1</li></Link>
      <Link><li className="text-[#6D6D6D] text-[14px]">Category 2</li></Link>
      <Link> <li className="text-[#6D6D6D] text-[14px]">Category 3</li></Link>
      <Link> <li className="text-[#6D6D6D] text-[14px]">Category 4</li></Link>
      <Link>  <li className="text-[#6D6D6D] text-[14px]">Category 5</li></Link>
     
    </ul>
    </div>

 <div className="">
    <Headding as={"h3"} text={"HELP"} className={'text-[16px] font-bold text-black pb-4.5'}/>
    <ul className=" gap-y-2">
      <Link><li className="text-[#6D6D6D] text-[14px]">Privacy Policy</li></Link>
      <Link><li className="text-[#6D6D6D] text-[14px]">Terms & Conditions</li></Link>
      <Link> <li className="text-[#6D6D6D] text-[14px]">Special E-shop</li></Link>
      <Link>  <li className="text-[#6D6D6D] text-[14px]">Shipping</li></Link>
      <Link>  <li className="text-[#6D6D6D] text-[14px]">Secure Payments</li></Link>      
    </ul>
    </div>

   <div className=" mt-[-55px] ">
       <Headding as={"h3"} text={"(052) 611-5711 company@domain.com"} className={'text-[16px] font-bold text-black w-[187px] pt-0 pb-4.5'}/>

        <Headding as={"p"} text={"575 Crescent Ave. Quakertown, PA 18951 "} className={'text-[14px]  text-[#6D6D6D] '}/> 
   </div>
   <div className="mt-[-105px]">
    
   <Image imgsrc={logo} className={"w-[130px]"}/>
   </div>
        </Flex>
        <div className="pt-[65px]">
          <Flex>
          <div className="w-[66.67%] ">
            <Flex className={"gap-x-6.5"}>
          <FaFacebookF />
          <FaLinkedinIn />
          <FaInstagram />
          </Flex>
          </div>
          <div className="w-1/3 pl-[50px]">
                   <Headding as={"p"} text={"2020 Orebi Minimal eCommerce Figma Template by Adveits"} className={'text-[14px]  text-[#6D6D6D] '}/> 
          </div>
          </Flex>
        </div>
      </Container>
    </div>
  )
}

export default Fotter