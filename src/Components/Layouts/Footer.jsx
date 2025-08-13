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
    <div className="bg-[#F5F5F3] py-[55px] ">
      <Container>
        <Flex>
   <div className="w-[41.67%]">
    <Flex>
    <div className="w-1/3">
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
    <div className="w-1/3">
    <Headding as={"h3"} text={"SHOP"} className={'text-[16px] font-bold text-black pb-4.5'}/>
    <ul className=" gap-y-2">
       <li className="text-[#6D6D6D] text-[14px]">Category 1</li>
       <li className="text-[#6D6D6D] text-[14px]">Category 2</li>
       <li className="text-[#6D6D6D] text-[14px]">Category 3</li>
       <li className="text-[#6D6D6D] text-[14px]">Category 4</li>
       <li className="text-[#6D6D6D] text-[14px]">Category 5</li>
    </ul>
    </div>
    <div className="w-1/3">
    <Headding as={"h3"} text={"HELP"} className={'text-[16px] font-bold text-black pb-4.5'}/>
    <ul className=" gap-y-2">
       <li className="text-[#6D6D6D] text-[14px]">Privacy Policy</li>
       <li className="text-[#6D6D6D] text-[14px]">Terms & Conditions</li>
       <li className="text-[#6D6D6D] text-[14px]">Special E-shop</li>
       <li className="text-[#6D6D6D] text-[14px]">Shipping</li>
       <li className="text-[#6D6D6D] text-[14px]">Secure Payments</li>
    </ul>
    </div>
  </Flex>
   </div>

   <div className="w-[25%] pl-[30px]  mt-[-40px]">
       <Headding as={"h3"} text={"(052) 611-5711 company@domain.com"} className={'text-[16px] font-bold text-black w-[187px] pt-0 pb-4.5'}/>

        <Headding as={"p"} text={"575 Crescent Ave. Quakertown, PA 18951 "} className={'text-[14px]  text-[#6D6D6D] '}/> 
   </div>
   <div className="w-1/3 pl-[38px] mt-[-110px]">
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