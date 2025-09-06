import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Headding from "../Headding";
import Flex from "../Flex";
import Input from "../Input";
import DropDown from "../DropDown";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const SignUp = () => {
  const [dropdown, setdropdown] = useState(false);
 

  const dropdownBtn = () => {
    setdropdown(!dropdown);
  };
  return (
    <>
      <div className="pt-[124px] pb-[140px]">
        <Container>
          <Headding
            as={"h3"}
            text={"Sign up"}
            className={"text-[49px] font-bold"}
          />
          <Flex className={"flex items-center gap-x-1.5 text-menuText "}>
            <Link to={"/"}>
              <Headding as={"h4"} text={"Home"} />
            </Link>
            <Headding
              as={"h4"}
              text={"> sign up"}
              className={"cursor-pointer"}
            />
          </Flex>
          <Headding
            as={"p"}
            text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.`}
            className={
              "w-[644px] text-[#767676] text-[16px] leading-7.5 pt-[127px] pb-[62px]"
            }
          />
          <hr className="border-[#F0F0F0]" />
          <Headding
            as={"h4"}
            text={"Your Personal Details"}
            className={"pt-[58px] pb-10.5 font-bold text-[39px] text-menuHover"}
          />
          <Flex className={"flex-wrap  gap-7  pb-[69px]"}>
            <Input
              type={"text"}
              placeholder={"First Name"}
              title={"First Name"}
            />
            <Input
              type={"text"}
              placeholder={"Last Name"}
              title={"Last  Name"}
            />
            <Input
              type={"email"}
              placeholder={"company@domain.com"}
              title={"Email address "}
            />
            <Input
              type={"number"}
              placeholder={"Your phone number"}
              title={"Telephone "}
            />
          </Flex>
          <hr className="border-[#F0F0F0] " />

          <Headding
            as={"h4"}
            text={"New Customer"}
            className={"pt-[58px] pb-10.5 font-bold text-[39px] text-menuHover"}
          />
          <Flex className={"flex-wrap  gap-7  pb-6 "}>
            <Input
              type={"text"}
              placeholder={"4279 Zboncak Port Suite 6212"}
              title={"Address 1"}
            />
            <Input type={"text"} placeholder={"_"} title={"Address 2"} />
            <Input type={"number"} placeholder={"05228"} title={"City "} />
            <Input
              type={"number"}
              placeholder={"Your phone number"}
              title={"Post Code "}
            />
            </Flex>
            <div className=" cursor-pointer  relative pb-[69px]">
                <Flex className={"gap-x-6"}>
        {/* Division dropdown */}
<div
  className="flex items-center gap-2 w-[500px] border-b border-[#F0F0F0] justify-between cursor-pointer"
  onClick={dropdownBtn}
>
  <Input type="text" title="Division" placeholder="Please select" readOnly />
  {dropdown ? (
    <RiArrowDropUpLine className="text-3xl font-bold" />
  ) : (
    <RiArrowDropDownLine className="text-3xl font-bold" />
  )}
</div>

{/* District dropdown */}
<div
  className="flex items-center gap-6 w-[500px] border-b border-[#F0F0F0] justify-between cursor-pointer"
  onClick={dropdownBtn}
>
  <Headding as="h4" text="District" className="py-4" />
  {dropdown ? (
    <RiArrowDropUpLine className="font-bold text-3xl" />
  ) : (
    <RiArrowDropDownLine className="font-bold text-3xl" />
  )}
</div>

</Flex>
          {dropdown && (
            <DropDown
              text={"hellow "}
              className={
                "w-[500px]  text-[14px] p-3 absolute bottom-[5%] bg-neutral-200 shadow rounded-2xl left-6 text-center"
              }
            />
          )}
              
                
 </div>
          <hr className="border-[#F0F0F0] " />
        </Container>
      </div>
    </>
  );
};

export default SignUp;
