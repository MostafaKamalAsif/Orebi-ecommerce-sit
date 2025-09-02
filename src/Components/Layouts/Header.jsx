import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import menu from "/src/assets/icon.svg";
import user from "/src/assets/user.png";
import { Link } from "react-router-dom";
import Headding from "../Headding";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart, FaUser, FaCaretDown } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  let [show, setshow] = useState(false);
   let [showUser, setShowUser] = useState(false);
  const showbtn = () => {
    setshow(!show);
  };
  const userbtn=()=>{
    setShowUser(!showUser)
  }
  return (
    <>
      <div className="py-[30px] bg-white">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[40%]">
              <Link to={"/"}>
                <Image imgsrc={logo} />
              </Link>
            </div>
            <div className="w-[60%]">
              <ul className="flex text-menuText text-14 gap-x-5">
                <Link to={"/"}>
                  <li className=" hover:text-menuHover hover:font-bold  duration-500">
                    Home
                  </li>
                </Link>

                <Link to={"shop"}>
                  <li className="hover:text-menuHover hover:font-bold duration-500">
                    {" "}
                    Shop
                  </li>
                </Link>

                <Link to={"/about"}>
                  <li className="hover:text-menuHover hover:font-bold duration-500">
                    About
                  </li>
                </Link>

                <Link to={"/contacts"}>
                  <li className="hover:text-menuHover hover:font-bold duration-500">
                    Contacts
                  </li>
                </Link>

                <Link to={"/journal"}>
                  <li className="hover:text-menuHover hover:font-bold duration-500">
                    Journal
                  </li>
                </Link>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>

      <div className="py-[25px] bg-[#F5F5F3] relative">
        <Container>
          <Flex className={"justify-between"}>

            <div onClick={showbtn} className="">
              <Flex className={"gap-x-2.5 cursor-pointer"}>
                <Image imgsrc={menu} className={""} />
                <Headding
                  as={"h3"}
                  className={"text-[14px] text-[#262626] "}
                  text={"Shop by Category"}
                />
              </Flex>

              {show && (
                <div className="absolute top-[80%] left-[6%] bg-black w-[250px] rounded-2xl p-4">
                  <ul className="text-white text-xl  text-center ">
                    <li className="py-3">Accesories</li>
                    <li className="py-3">Furniture</li>
                    <li className="py-3">Electronics</li>
                    <li className="py-3">Clothes</li>
                    <li className="py-3">Bags</li>
                    <li className="py-3">Home appliances</li>
                    
                  </ul>
                </div>
                
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="bg-white text-[#C4C4C4] text-[14px] w-[601px] py-4 pl-5.5"
              />
              <IoSearch className="absolute right-[3%] top-[50%] -translate-y-1/2 cursor-pointer" />
            </div>
            <div className="">
              <Flex className={"gap-x-10 cursor-pointer"}>
               <div className="relative">
                <div onClick={userbtn} className=" flex">
                  <FaUser />
                  <FaCaretDown />

                </div>
                {showUser && (
                  <div className="absolute top-[200%] left-[5%] bg-black w-[180px] rounded-2xl p-4">
                  <ul className="text-white text-xl  text-center">
                    <li>My Account</li>
                    <li>Log Out</li>
                  </ul>
                  </div>
                )}
                
</div>

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
