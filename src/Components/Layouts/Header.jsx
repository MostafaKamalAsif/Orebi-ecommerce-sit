import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import menu from "/src/assets/icon.svg"
import user from "/src/assets/user.png"
import { Link } from "react-router-dom";
import Headding from "../Headding";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <>
      <div className="py-[30px] bg-white">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Image imgsrc={logo} />
            </div>
            <div className="">
              <ul className="flex  gap-x-5">
                <Link to={"/"}>
                  <li>Home</li>
                </Link>

                <Link to={"shop"}>
                  <li> Shop</li>
                </Link>

                <Link to={"/about"}>
                  <li>About</li>
                </Link>

                <Link to={"/contacts"}>
                  <li>Contacts</li>
                </Link>

                <Link to={"/journal"}>
                  <li>Journal</li>
                </Link>
              </ul>
            </div>
            <div className=""></div>
          </Flex>
        </Container>
      </div>

      <div className="py-[25px] bg-[#F5F5F3]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Flex className={"gap-x-2.5"}>
                 <Image imgsrc={menu} className={'cursor-pointer'}/>
              <Headding as={"h3"} className={"text-[14px] text-[#262626] "} text={"Shop by Category"}/>
              </Flex>
             
            </div>
            <div className="relative">
              <input type="text" placeholder="Search Products"  className="bg-white text-[#C4C4C4] text-[14px] w-[601px] py-4 pl-5.5" />
              <IoSearch className="absolute right-[3%] top-[30%] cursor-pointer"/>
            </div>
            <div className="">
              <Flex className={'gap-x-10'}> 
                <Image imgsrc={user}/>
                <FaShoppingCart />
              </Flex>
              
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
