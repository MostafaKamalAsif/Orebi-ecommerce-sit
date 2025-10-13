import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart, FaUser, FaCaretDown, FaUserPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdLogin } from "react-icons/md";

import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Headding from "../Headding";
import SmDevice from "./SmDevice";
import Autosearch from "./Autosearch";
import Login from './Login';
import { decrement, increment } from "../../Slices/AddToCart";

import logo from "/src/assets/logo.png";
import menu from "/src/assets/icon.svg";

const Header = () => {
  // -------------------------
  // State Management
  // -------------------------
  const [input, setInput] = useState("");        
  const [barShow, setBarShow] = useState(false); 
  const [showCategory, setShowCategory] = useState(false); 
  const [showUser, setShowUser] = useState(false);          
  const [showCart, setShowCart] = useState(false);          
  const [showLogin, setShowLogin] = useState(false);        

  const cartData = useSelector((state) => state.addcart.value); 
  const dispatch = useDispatch(); 

  const location = useLocation(); 

  // -------------------------
  // Refs for detecting outside clicks
  // -------------------------
  const categoryRef = useRef();
  const userRef = useRef();
  const loginRef = useRef();

  // -------------------------
  // Close Shop Category on outside click
  // -------------------------
  useEffect(() => {
    function handleClickOutsideCategory(event) {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowCategory(false);
      }
    }
    document.addEventListener("click", handleClickOutsideCategory);
    return () => document.removeEventListener("click", handleClickOutsideCategory);
  }, []);

  // -------------------------
  // Close User Dropdown on outside click
  // -------------------------
  useEffect(() => {
    function handleClickOutsideUser(event) {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setShowUser(false);
      }
    }
    document.addEventListener("click", handleClickOutsideUser);
    return () => document.removeEventListener("click", handleClickOutsideUser);
  }, []);

  // -------------------------
  // Close Login Overlay on outside click
  // -------------------------
  useEffect(() => {
    function handleClickOutsideLogin(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setShowLogin(false);
      }
    }
    document.addEventListener("click", handleClickOutsideLogin);
    return () => document.removeEventListener("click", handleClickOutsideLogin);
  }, []);

  // -------------------------
  // Toggle functions
  // -------------------------
  const toggleCategory = () => setShowCategory(!showCategory);
  const toggleUser = () => setShowUser(!showUser);
  const toggleCart = () => setShowCart(!showCart);

  return (
    <>
      {/* -------------------------
          Desktop Header
      ------------------------- */}
      <div className="hidden md:block py-[30px] bg-white">
        <Container>
          <Flex className={"justify-between"}>
            {/* Logo */}
            <div className="w-[40%]">
              <Link to="/">
                <Image imgsrc={logo} />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="w-[60%]">
              <ul className="flex text-menuText text-14 gap-x-5">
                {["/", "/shop", "/about", "/contacts", "/journal"].map((path, index) => {
                  const name = ["Home", "Shop", "About", "Contacts", "Journal"][index];
                  return (
                    <Link
                      to={path === "/" ? "/" : path.slice(1)}
                      key={name}
                      className={`${
                        location.pathname === path
                          ? "border-b-2 border-black text-black font-bold"
                          : ""
                      }`}
                    >
                      <li className="hover:text-menuHover">{name}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </Flex>
        </Container>
      </div>

      {/* -------------------------
          Mobile Header
      ------------------------- */}
      <SmDevice />

      {/* -------------------------
          Bottom Header with Search & Cart
      ------------------------- */}
      <div className="py-[25px] bg-[#F5F5F3] relative">
        <Container>
          <Flex className={"justify-between"}>
            
            {/* Shop by Category */}
            <div onClick={toggleCategory} ref={categoryRef}>
              <Flex className={"gap-x-2.5 cursor-pointer pl-2 md:pl-0"}>
                <Image imgsrc={menu} className={"w-4 md:w-fit"} />
                <Headding
                  as={"h3"}
                  className={"text-[11px] md:text-[14px] text-[#262626]"}
                  text={"Shop by Category"}
                />
              </Flex>

              {showCategory && (
                <div className="absolute top-[80%] left-[6%] shadow bg-neutral-100 w-[200px] rounded-2xl">
                  <ul className="text-sm text-gray-700">
                    {["Accessories", "Furniture", "Electronics", "Clothes", "Bags", "Home appliances"].map((item) => (
                      <li
                        key={item}
                        className="py-2 md:py-3 px-5 cursor-pointer text-[12px] md:text-[16px] hover:bg-neutral-300 hover:rounded-[5px] duration-100"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="bg-white text-[11px] md:text-[14px] w-[250px] md:w-[601px] py-2 md:py-4 pl-5.5 text-black"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => setBarShow(true)}
                onBlur={() => setBarShow(false)}
              />
              <IoSearch className="absolute right-[3%] top-[50%] -translate-y-1/2 cursor-pointer" />
              <Autosearch input={input} setinput={setInput} barshow={barShow} setbarshow={setBarShow} />
            </div>

            {/* User & Cart Icons */}
            <div>
              <Flex className={"gap-x-10 cursor-pointer"}>

                {/* User Dropdown */}
                <div onClick={toggleUser} ref={userRef} className="flex items-center">
                  <FaUser />
                  <FaCaretDown />
                </div>

                {showUser && (
                  <div className="absolute top-[70px] -right-[20px] md:right-[50px] bg-neutral-100 w-[120px] md:w-[150px] shadow rounded-2xl z-20">
                    <ul>
                      {/* Log In button */}
                      <div
                        className="py-2 md:py-3 px-2 md:px-3 flex items-center gap-x-3 cursor-pointer hover:bg-neutral-300 rounded-[5px] duration-100 font-semibold"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent document click from closing immediately
                          setShowLogin(true);
                          setShowUser(false); // Optional: close user dropdown when login opens
                        }}
                      >
                        <MdLogin className="text-[15px] md:text-2xl" />
                        <li className="text-[12px] md:text-[16px]">Log In</li>
                      </div>

                      {/* Sign Up button */}
                      <Link
                        to={"sign_up"}
                        className="flex items-center gap-x-3 py-2 md:py-3 px-3 md:px-4 cursor-pointer hover:bg-neutral-300 hover:rounded-[5px] duration-100 font-semibold"
                      >
                        <FaUserPlus className="text-[15px] md:text-2xl" />
                        <li className="text-[12px] md:text-[16px]">Sign Up</li>
                      </Link>
                    </ul>
                  </div>
                )}

                {/* Shopping Cart Icon */}
                <FaShoppingCart className="mr-2 md:mr-0" onClick={toggleCart} />
              </Flex>

              {/* -------------------------
                  Shopping Cart Overlay
              ------------------------- */}
              {showCart && (
                <div className="w-[350px] md:w-[900px] h-[200px] md:h-screen overflow-y-auto max-h-[500px] bg-white shadow rounded-[5px] top-[80px] right-[5%] fixed z-10">
                  <RxCross2
                    className="w-10 md:w-13 text-2xl md:text-4xl cursor-pointer hover:bg-red-500 fixed hover:text-white rounded-[5px] duration-300"
                    onClick={toggleCart}
                  />
                  <div className="w-full py-8 bg-[#F5F7F7]">
                    <ul className="flex text-center">
                      <li className="w-[30%] text-black font-bold text-[11px] md:text-[16px]">Product Name</li>
                      <li className="w-[20%] text-black font-bold text-[11px] md:text-[16px]">Product Price</li>
                      <li className="w-[20%] text-black font-bold text-[11px] md:text-[16px]">Quantity</li>
                      <li className="w-[15%] text-black font-bold text-[11px] md:text-[16px]">Image</li>
                      <li className="w-[15%] text-black font-bold text-[11px] md:text-[16px]">Total</li>
                    </ul>
                  </div>

                  {cartData.map((item) => (
                    <div key={item.id || item.title}>
                      <hr className="w-full border border-neutral-300" />
                      <Flex className="items-center text-start md:text-center bg-white">
                        <li className="w-[30%] text-black font-semibold text-[11px] md:text-[16px] m-auto">{item.title}</li>
                        <li className="w-[20%] text-black font-semibold text-[11px] md:text-[16px] m-auto">{`$${item.price}`}</li>
                        <li className="w-[15%] text-black text-center font-semibold text-[11px] md:text-[16px] border border-neutral-200 py-[4px] px-[12px] m-auto flex items-center justify-between md:space-x-6">
                          <button onClick={() => dispatch(decrement(item))}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => dispatch(increment(item))}>+</button>
                        </li>
                        <li className="w-[15%] text-black font-semibold text-[11px] md:text-[16px]">
                          <img src={item.img} alt={item.title} />
                        </li>
                        <li className="w-[15%] text-black font-semibold text-[11px] md:text-[16px] m-auto">{`$${(item.price * item.quantity).toFixed(2)}`}</li>
                      </Flex>
                    </div>
                  ))}

                  {/* Subtotal */}
                  <hr className="w-full border border-neutral-300" />
                  <div className="flex justify-end p-4 bg-gray-100">
                    <span className="text-[14px] md:text-lg font-bold">
                      Subtotal: $
                      {cartData.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </Flex>
        </Container>
      </div>

      {/* -------------------------
          Login Overlay
      ------------------------- */}
      {showLogin && (
        <div
          ref={loginRef}
          onClick={(e) => e.stopPropagation()} // Prevent overlay clicks from closing itself
          className="absolute top-[150px] right-[5%] z-50 shadow  w-[370px]  rounded-2xl"
        >
          <Login />
        </div>
      )}
    </>
  );
};

export default Header;
