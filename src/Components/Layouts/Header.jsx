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
import { addtocart, decrement, increment, removeItem } from "../../Slices/AddToCart";

import logo from "/src/assets/logo.png";
import menu from "/src/assets/icon.svg";

const Header = () => {
  const [input, setInput] = useState("");
  const [barShow, setBarShow] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [toast, setToast] = useState(null);

  const cartData = useSelector((state) => state.addcart.value);
  const lastAdded = useSelector((state) => state.addcart.lastAdded);
  const dispatch = useDispatch();
  const location = useLocation();

  const categoryRef = useRef();
  const userRef = useRef();
  const loginRef = useRef();

  // Show toast only when adding new item
  useEffect(() => {
    if (lastAdded) {
      setToast(lastAdded);
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [lastAdded]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (ref, setter) => (event) => {
      if (ref.current && !ref.current.contains(event.target)) setter(false);
    };

    const closeCategory = handleClickOutside(categoryRef, setShowCategory);
    const closeUser = handleClickOutside(userRef, setShowUser);
    const closeLogin = handleClickOutside(loginRef, setShowLogin);

    document.addEventListener("click", closeCategory);
    document.addEventListener("click", closeUser);
    document.addEventListener("click", closeLogin);

    return () => {
      document.removeEventListener("click", closeCategory);
      document.removeEventListener("click", closeUser);
      document.removeEventListener("click", closeLogin);
    };
  }, []);

  const toggleCategory = () => setShowCategory(!showCategory);
  const toggleUser = () => setShowUser(!showUser);
  const toggleCart = () => setShowCart(!showCart);

  const totalQuantity = cartData.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Top Header */}
      <div className="hidden md:block py-[30px] bg-white">
        <Container>
          <Flex className="justify-between">
            <div className="w-[40%]">
              <Link to="/"><Image imgsrc={logo} /></Link>
            </div>
            <div className="w-[60%]">
              <ul className="flex text-menuText text-14 gap-x-5">
                {["/", "/shop", "/about", "/contacts", "/journal"].map((path, index) => {
                  const name = ["Home", "Shop", "About", "Contacts", "Journal"][index];
                  return (
                    <Link
                      to={path === "/" ? "/" : path.slice(1)}
                      key={name}
                      className={location.pathname === path ? "border-b-2 border-black text-black font-bold" : ""}
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

      {/* Mobile Header */}
      <SmDevice />

      {/* Bottom Header */}
      <div className="py-[25px] bg-[#F5F5F3] relative">
        <Container>
          <Flex className="justify-between">
            {/* Shop by Category */}
            <div onClick={toggleCategory} ref={categoryRef}>
              <Flex className="gap-x-2.5 cursor-pointer pl-2 md:pl-0">
                <Image imgsrc={menu} className="w-4 md:w-fit" />
                <Headding as="h3" className="text-[11px] md:text-[14px] text-[#262626]" text="Shop by Category" />
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

            {/* User & Cart */}
            <div>
              <Flex className="gap-x-10 cursor-pointer">
                {/* User Dropdown */}
                <div onClick={toggleUser} ref={userRef} className="flex items-center">
                  <FaUser /><FaCaretDown />
                </div>
                {showUser && (
                  <div className="absolute top-[70px] -right-[20px] md:right-[50px] bg-neutral-100 w-[120px] md:w-[150px] shadow rounded-2xl z-20">
                    <ul>
                      <div
                        className="py-2 md:py-3 px-2 md:px-3 flex items-center gap-x-3 cursor-pointer hover:bg-neutral-300 rounded-[5px] duration-100 font-semibold"
                        onClick={(e) => { e.stopPropagation(); setShowLogin(true); setShowUser(false); }}
                      >
                        <MdLogin className="text-[15px] md:text-2xl" />
                        <li className="text-[12px] md:text-[16px]">Log In</li>
                      </div>
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

                {/* Cart */}
                <div className="relative" onClick={toggleCart}>
                  <FaShoppingCart className="mr-2 md:mr-0 cursor-pointer" />
                  {totalQuantity > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] md:text-xs font-bold rounded-full px-[6px] py-[2px] cursor-pointer">
                      {totalQuantity}
                    </span>
                  )}
                </div>
              </Flex>

              {/* Cart Overlay */}
              {showCart && (
                <div className="w-[350px] md:w-[900px] h-[200px] md:h-screen overflow-y-auto max-h-[500px] bg-white shadow rounded-[5px] top-[80px] right-[5%] fixed z-10 p-2">
                  <RxCross2
                    className="w-10 md:w-13 text-2xl md:text-4xl cursor-pointer hover:bg-red-500 fixed hover:text-white rounded-[5px] duration-300 right-2 top-2"
                    onClick={toggleCart}
                  />

                  {/* Header Row */}
                  <div className="w-full py-4 bg-[#F5F7F7]">
                    <ul className="flex text-center">
                      <li className="w-[30%] text-black font-bold text-[11px] md:text-[16px]">Product Name</li>
                      <li className="w-[20%] text-black font-bold text-[11px] md:text-[16px]">Price</li>
                      <li className="w-[20%] text-black font-bold text-[11px] md:text-[16px]">Quantity</li>
                      <li className="w-[15%] text-black font-bold text-[11px] md:text-[16px]">Image</li>
                      <li className="w-[15%] text-black font-bold text-[11px] md:text-[16px]">Total</li>
                    </ul>
                  </div>

                  {/* Cart Items */}
                  {cartData.map((item) => (
                    <div key={item.title} className="relative">
                      <hr className="w-full border border-neutral-300" />
                      <ul className="flex items-center text-start md:text-center bg-white relative py-2">

                        {/* Cross button for each item */}
                        <RxCross2
                          className="absolute left-2 top-1/2 -translate-y-1/2 text-black cursor-pointer hover:text-red-600 text-2xl"
                          onClick={() => dispatch(removeItem(item))}
                        />

                        <li className="w-[30%] font-semibold text-[11px] md:text-[16px]">{item.title}</li>
                        <li className="w-[20%] font-semibold text-[11px] md:text-[16px]">{`$${item.price}`}</li>
                        <li className="w-[20%] font-semibold text-[11px] md:text-[16px] flex justify-center items-center gap-2">
                          <button onClick={() => dispatch(decrement(item))} className="cursor-pointer">-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => dispatch(increment(item))} className="cursor-pointer">+</button>
                        </li>
                        <li className="w-[15%]">
                          <img src={item.img} alt={item.title} />
                        </li>
                        <li className="w-[15%] font-semibold text-[11px] md:text-[16px]">{`$${(item.price * item.quantity).toFixed(2)}`}</li>
                      </ul>
                    </div>
                  ))}

                  <hr className="w-full border border-neutral-300" />

                  {/* Subtotal */}
                  <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100 gap-3">
                    <span className="text-[14px] md:text-lg font-bold">
                      Subtotal: ${cartData.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                    </span>
                    <button className="bg-black text-white px-6 py-2 rounded-md text-[13px] md:text-[16px] hover:bg-neutral-700 transition-all">
                      BUY NOW
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Flex>
        </Container>
      </div>

      {/* Login Overlay */}
      {showLogin && (
        <div ref={loginRef} onClick={(e) => e.stopPropagation()} className="absolute top-[150px] right-[5%] z-50 shadow w-[370px] rounded-2xl">
          <Login />
        </div>
      )}

      {/* Toast Popup */}
      {toast && (
        <div className="fixed bottom-5 right-5 bg-white shadow-xl border border-gray-200 rounded-lg p-3 flex items-center gap-3 animate-slide-in z-[999]">
          <img src={toast.img} alt={toast.title} className="w-10 h-10 rounded-md object-cover" />
          <div>
            <p className="text-[14px] font-semibold text-gray-800">{toast.title}</p>
            <p className="text-[12px] text-green-600 font-medium">Added to cart successfully!</p>
          </div>
        </div>
      )}

      <style>
        {`
        @keyframes slideIn {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in { animation: slideIn 0.4s ease-out forwards; }
        `}
      </style>
    </>
  );
};

export default Header;
