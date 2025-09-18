import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import menu from "/src/assets/icon.svg";
import { Link, useLocation } from "react-router-dom";
import Headding from "../Headding";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart, FaUser, FaCaretDown } from "react-icons/fa";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { useEffect } from "react";
import { MdLogin } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { decrement, increment } from "../../Slices/AddToCart";

const Header = () => {
  let [show, setshow] = useState(false);
  let [showUser, setShowUser] = useState(false);
  let [showcart, setShowcart] = useState(false);
  let data = useSelector((state) => state.addcart.value);
  const dispatchcounter = useDispatch();
  // close Catogory in Outside click start
  const catgoryRef = useRef();
  useEffect(() => {
    function closeCatogoryOutside(event) {
      if (catgoryRef.current && !catgoryRef.current.contains(event.target)) {
        setshow(false);
      }
    }

    document.addEventListener("click", closeCatogoryOutside);
    return () => {
      document.removeEventListener("click", closeCatogoryOutside);
    };
  }, []);
  // close Catogory in Outside click end

  // close user in Outside click start
  const userRef = useRef();
  useEffect(() => {
    function closeuserOutside(event) {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setShowUser(false);
      }
    }

    document.addEventListener("click", closeuserOutside);
    return () => {
      document.removeEventListener("click", closeuserOutside);
    };
  }, []);
  // close Catogory in Outside click end
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
                <Image imgsrc={logo} className={""} />
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
            <div onClick={showbtn}  className="">
              <Flex className={"gap-x-2.5 cursor-pointer"}>
                <Image imgsrc={menu} className={""} />
                <Headding
                  as={"h3"}
                  className={"text-[14px] text-[#262626] "}
                  text={"Shop by Category"}
                />
              </Flex>

              {show && (
                <div className="absolute top-[80%] left-[6%] shadow bg-neutral-100  w-[200px] rounded-2xl ">
                  <ul className="   text-sm text-gray-700  ">
                    <li className="py-3 px-5 cursor-pointer text-[16px] hover:bg-neutral-300 hover:rounded-[5px] duration-100 ">
                      Accesories
                    </li>
                    <li className="py-3 px-5 cursor-pointer text-[16px] hover:bg-neutral-300 hover:rounded-[5px] duration-100 ">
                      Furniture
                    </li>
                    <li className="py-3 px-5 cursor-pointer text-[16px] hover:bg-neutral-300 hover:rounded-[5px] duration-100 ">
                      Electronics
                    </li>
                    <li className="py-3 px-5 cursor-pointer text-[16px] hover:bg-neutral-300 hover:rounded-[5px] duration-100 ">
                      Clothes
                    </li>
                    <li className="py-3 px-5 cursor-pointer text-[16px] hover:bg-neutral-300 hover:rounded-[5px] duration-100 ">
                      Bags
                    </li>
                    <li className="py-3 px-5 cursor-pointer text-[16px] hover:bg-neutral-300 hover:rounded-[5px] duration-100 ">
                      Home appliances
                    </li>
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
                  <div onClick={userbtn} ref={userRef} className=" flex">
                    <FaUser />
                    <FaCaretDown />
                    {showUser && (
                      <div className="absolute top-[40px] left-[5%] bg-neutral-100  w-[150px] shadow rounded-2xl ">
                        <ul className=" text-sm text-gray-700 ">
                          <div className="py-3 px-3 gap-x-3 flex items-center cursor-pointer hover:bg-neutral-300 hover:rounded-[5px] duration-100 font-semibold">
                            <MdLogin className="text-2xl " />
                            <li className=" text-[16px] ">Log In</li>
                          </div>

                          <Link
                            to={"sign_up"}
                            className="flex items-center gap-x-3 py-3 px-4 cursor-pointer hover:bg-neutral-300 hover:rounded-[5px] duration-100 font-semibold"
                          >
                            <FaUserPlus className="text-2xl " />

                            <li className="  text-[16px] ">Sign Up</li>
                          </Link>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
             
                  <FaShoppingCart onClick={showcartbtn} />
                  
                
              
              </Flex>
              {showcart && (
               <> <div className="w-[900px] h-screen overflow-y-auto max-h-[500px] bg-white  shadow rounded-[5px] top-[80px] right-[5%]  fixed z-10">
                  <ul>
                    <RxCross2
                      className="w-13 text-4xl cursor-pointer hover:bg-red-500 fixed hover:text-white rounded-[5px] duration-300"
                      onClick={showcartbtn}
                    />
                    <div className="w-full py-8 bg-[#F5F7F7]  ">
                      <ul className="flex text-center  ">
                        <li className="w-[30%] text-black font-bold text-[16px]">
                          Product Name
                        </li>
                        <li className="w-[20%] text-black font-bold text-[16px]">
                          Product price
                        </li>
                        <li className="w-[20%] text-black font-bold text-[16px]">
                          Product Quantity
                        </li>
                        <li className="w-[15%] text-black font-bold text-[16px]">
                          Product Image
                        </li>
                        <li className="w-[15%] text-black font-bold text-[16px] ">
                          Total
                        </li>
                      </ul>
                    </div>
                    {data.map((item) => (
                      <>
                        <hr className="w-full border border-neutral-300 " />
                        <div className="flex  text-center bg-white ">
                          <li className="w-[30%] text-black font-semibold text-[16px] m-auto">
                            {item.title}
                          </li>
                          <li className="w-[20%] text-black font-semibold text-[16px] m-auto">{`$${item.price}`}</li>
                          <li className="w-[15%] text-black font-semibold text-[16px] border border-neutral-200 py-[4px] px-[12px]  m-auto space-x-6" >
                            

                            <button
                              onClick={() => dispatchcounter(decrement(item))}
                              className=" cursor-pointer"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>

                            <button
                              onClick={() => dispatchcounter(increment(item))}
                              className="  cursor-pointer"
                            >
                              +
                            </button>
                          </li>
                          
                          <li className="w-[15%] text-black font-semibold text-[16px]">
                            <img src={item.img} />
                          </li>
                          <li className="w-[15%] text-black font-semibold text-[16px] m-auto">{`$${(
                            item.price * item.quantity
                          ).toFixed(2)}`}</li>
                        </div>
                      </>
                    ))}
                    {/* Subtotal row */}
                    <hr className="w-full border border-neutral-300 " />
                    <div className="flex justify-end p-4 bg-gray-100">
                      <span className="text-lg font-bold">
                        Subtotal: $
                        {data.reduce((acc,item)=>{
                        acc+=item.price*item.quantity
                        return acc
                        },0 ).toFixed(2)}
                      </span>
                    </div>
                  </ul>
                  <hr className="w-full border border-neutral-300 " />
                  
                </div>
               
</>
              )}
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
