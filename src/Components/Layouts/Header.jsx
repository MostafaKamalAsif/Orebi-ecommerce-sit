import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import menu from "/src/assets/icon.svg";
import user from "/src/assets/user.png";
import { Link, useLocation } from "react-router-dom";
import Headding from "../Headding";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart, FaUser, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  let [show, setshow] = useState(false);
  let [showUser, setShowUser] = useState(false);
  let [showcart, setShowcart] = useState(false);
  let data = useSelector((state) => state.addcart.value);
  

  const showbtn = () => {
    setshow(!show);
  };
  const userbtn = () => {
    setShowUser(!showUser);
  };
  const showcartbtn = () => {
    setShowcart(!showcart);
  };
  const location = useLocation();
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
                <Link
                  to={"/"}
                  className={`${
                    location.pathname === "/"
                      ? "border-b-2 border-black text-black font-bold "
                      : ""
                  }`}
                >
                  <li className=" hover:text-menuHover ">Home</li>
                </Link>

                <Link
                  to={"shop"}
                  className={`${
                    location.pathname === "/shop"
                      ? "border-b-2 border-black text-black font-bold "
                      : ""
                  }`}
                >
                  <li className="hover:text-menuHover "> Shop</li>
                </Link>

                <Link
                  to={"about"}
                  className={`${
                    location.pathname === "/about"
                      ? "border-b-2 border-black text-black font-bold "
                      : ""
                  }`}
                >
                  <li className="hover:text-menuHover ">About</li>
                </Link>

                <Link
                  to={"contacts"}
                  className={`${
                    location.pathname === "/contacts"
                      ? "border-b-2 border-black text-black font-bold "
                      : ""
                  }`}
                >
                  <li className="hover:text-menuHover">Contacts</li>
                </Link>

                <Link
                  to={"journal"}
                  className={`${
                    location.pathname === "/journal"
                      ? "border-b-2 border-black text-black font-bold  "
                      : ""
                  }`}
                >
                  <li className="hover:text-menuHover ">Journal</li>
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
                <div className="absolute top-[80%] left-[6%]  bg-neutral-100  w-[200px] rounded-2xl p-4">
                  <ul className="px-4 py-2 text-sm text-gray-700  ">
                    <li className="py-3 text-[16px]">Accesories</li>
                    <li className="py-3 text-[16px]">Furniture</li>
                    <li className="py-3 text-[16px]">Electronics</li>
                    <li className="py-3 text-[16px]">Clothes</li>
                    <li className="py-3 text-[16px]">Bags</li>
                    <li className="py-3 text-[16px]">Home appliances</li>
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
              <Flex className={"gap-x-10 cursor-pointer relative"}>
                <div className="relative">
                  <div onClick={userbtn} className=" flex">
                    <FaUser />
                    <FaCaretDown />
                    {showUser && (
                      <div className="absolute top-[40px] left-[5%] bg-neutral-100  w-[180px] rounded-bl-2xl rounded-br-2xl p-4">
                        <ul className="px-4 py-2 text-sm text-gray-700 ">
                          <li className="pt-3 text-[16px] ">Log In</li>
                          <Link to={"sign_up"}>
                            <li className="pt-3 text-[16px]">Sign Up</li>
                          </Link>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <FaShoppingCart onClick={showcartbtn} />
              </Flex>
              {showcart && (
                <div className="w-[900px] h-screen absolute shadow rounded-[5px] top-[80px] right-[5%] bg-neutral-100">
                  <ul>
                    <div className="w-[800px] pt-7 ">
                      <ul className="flex text-center pb-4 ">
                        <li className="w-[30%] text-black font-semibold text-[16px]">Product Name</li>
                        <li className="w-[20%] text-black font-semibold text-[16px]">Product price</li>
                        <li className="w-[20%] text-black font-semibold text-[16px]">Product Quantity</li>
                        <li className="w-[15%] text-black font-semibold text-[16px]">Product Image</li>
                        <li className="w-[15%] text-black font-semibold text-[16px] ">Total</li>

                        </ul>
                        <hr className="w-[900px] border border-neutral-300 " />
                   {data.map(item => (
                    <div className="flex  text-center pt-7">
                       <li className="w-[30%] text-black font-semibold text-[16px]">{item.title}</li>
                        <li className="w-[20%] text-black font-semibold text-[16px]">{`$${item.price}`}</li>
                        <li className="w-[20%] text-black font-semibold text-[16px]">{item.quantity}</li>
                        <li className="w-[15%] text-black font-semibold text-[16px]"><img src={item.img}/></li>
                        <li className="w-[15%] text-black font-semibold text-[16px]">{`$${item.price * item.quantity}`}</li>
                        
                    </div>
                    

))}
</div>
                  </ul>
                  <hr className="w-[900px] border border-neutral-300 " />
                </div>
              )}
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
