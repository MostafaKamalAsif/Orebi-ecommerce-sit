import React, { useState } from "react";
import Container from "../Container";
import Headding from "../Headding";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import Input from "../Input";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartData = useSelector((state) => state.addcart.value);
  const subtotal = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [country, setCountry] = useState("");

  return (
    <div className="py-[128px] bg-white">
      <Container>
        {/* Header */}
        <Headding
          as={"h1"}
          text={"Checkout"}
          className={"font-bold text-[#262626] text-3xl"}
        />
        <Flex className={"flex items-center gap-x-1.5 pt-3 text-menuText"}>
          <Link to={"/"}>
            <Headding as={"h4"} text={"Home"} />
          </Link>
          <Headding as={"h4"} text={"> Checkout"} className={"cursor-pointer"} />
        </Flex>

        {/* Coupon */}
        <Headding
          as={"h3"}
          text={"Have a coupon? Click here to enter your code"}
          className={"py-[100px] text-[#767676] text-[16px]"}
        />

        {/* Billing Details */}
        <Headding
          as={"h3"}
          text={"Billing Details"}
          className={"pb-[42px] font-bold text-[#262626] text-[39px]"}
        />

        <Flex className={"gap-x-7.5"}>
          <Input title={"First Name *"} className={"font-semibold"} type={"text"} placeholder={"First Name"} />
          <Input title={"Last Name *"} className={"font-semibold"} type={"text"} placeholder={"Last Name"} />
        </Flex>

        <Input title={"Company Name (optional)"} className={"font-semibold pt-6"} type={"text"} placeholder={"Company Name"} />

        {/* Country Dropdown */}
        <div className="pt-6">
          <Headding as={"h3"} text={"Country *"} className={"font-semibold"} />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-[500px] border-b outline-none border-[#F0F0F0] py-4 text-[14px]"
          >
            <option value="">Please select</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
          </select>
        </div>

        <Input title={"Street Address *"} className={"font-semibold pt-6"} type={"text"} placeholder={"House number and street name"} />
        <Input placeholder={"Apartment, suite, unit etc. (optional)"} />
        <Input title={"Town/City *"} className={"font-semibold pt-6"} type={"text"} placeholder={"Town/City"} />
        <Input title={"County (optional)"} className={"font-semibold pt-6"} type={"text"} placeholder={"County"} />
        <Input title={"Post Code *"} className={"font-semibold pt-6"} type={"text"} placeholder={"Post Code"} />
        <Input title={"Phone *"} className={"font-semibold pt-6"} type={"text"} placeholder={"Phone"} />
        <Input title={"Email Address *"} className={"font-semibold pt-6"} type={"email"} placeholder={"Email"} />

        {/* Additional Info */}
        <div className="py-[100px]">
          <Headding as={"h3"} text={"Additional Information"} className={"pb-[42px] font-bold text-[#262626] text-[39px]"} />
          <Input title={"Other Notes (optional)"} className={"font-semibold pt-6"} type={"text"} placeholder={"Notes about your order, e.g. special notes for delivery."} />
        </div>

        {/* Your Order */}
        <Headding as={"h3"} text={"Your Order"} className={"pb-[42px] font-bold text-[#262626] text-[39px]"} />
        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-10">
          <div className="bg-[#F5F5F3] px-6 py-4 flex justify-between font-semibold text-[#262626]">
            <p>Product</p>
            <p>Total</p>
          </div>
          <div className="bg-white">
            {cartData.map((item) => (
              <div key={item.id || item.title} className="flex justify-between px-6 py-4 border-b border-gray-200 text-[#767676]">
                <p className="w-[70%] text-[15px]">{item.title} × {item.quantity}</p>
                <p className="w-[30%] text-end font-semibold text-[#262626]">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between px-6 py-5 bg-[#F5F5F3] font-bold text-[#262626] text-[18px]">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
        </div>

        {/* Payment Method */}
        <Headding as={"h3"} text={"Payment Method"} className={"pb-[30px] font-bold text-[#262626] text-[32px]"} />
        <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
          <div className="space-y-5 text-[#262626] font-medium">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" value="bank" checked={paymentMethod === "bank"} onChange={(e) => setPaymentMethod(e.target.value)} />
              Direct Bank Transfer
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" value="cod" checked={paymentMethod === "cod"} onChange={(e) => setPaymentMethod(e.target.value)} />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" value="card" checked={paymentMethod === "card"} onChange={(e) => setPaymentMethod(e.target.value)} />
              Credit / Debit Card
            </label>
          </div>

          {paymentMethod === "card" && (
            <div className="mt-8 border-t border-gray-200 pt-6 space-y-5">
              <Input title={"Cardholder Name *"} placeholder={"Name on the card"} className={"font-semibold"} type={"text"} />
              <Input title={"Card Number *"} placeholder={"1234 5678 9012 3456"} className={"font-semibold"} type={"text"} />
              <Flex className={"gap-x-7.5"}>
                <Input title={"Expiry Date *"} placeholder={"MM/YY"} className={"font-semibold"} type={"text"} />
                <Input title={"CVV *"} placeholder={"***"} className={"font-semibold"} type={"password"} />
              </Flex>
            </div>
          )}
        </div>

        {/* Place Order */}
        <div className="mt-10 text-end">
          <button className="bg-[#262626] text-white px-8 py-4 rounded-full font-semibold text-[16px] hover:bg-[#444] duration-300">
            Place Order
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
