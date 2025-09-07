import React, { useState } from 'react'
import Container from '../Container'
import Headding from '../Headding'
import Flex from '../Flex'
import Input from '../Input'
import DropDown from '../DropDown'
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
const NewCustomer = () => {
      const [dropdown, setdropdown] = useState(false);
      const [dropdownDistrict, setdropdownDistrict] = useState(false);
     
    const dropdownBtnDistrict = () => {
        setdropdownDistrict(!dropdownDistrict);
      };
      const dropdownBtn = () => {
        setdropdown(!dropdown);
      };
  return (
    <>
    <div className="">
        <Container>
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
        
<div
  className="flex items-center gap-2 w-[500px] border-b border-[#F0F0F0] justify-between cursor-pointer"
  onClick={dropdownBtn}
>
  <Input divclassName={"w-[500px]"} type="text" title="Division" placeholder="Please select" icon={dropdown ? (
    <RiArrowDropUpLine className="text-3xl font-bold" />
  ) : (
    <RiArrowDropDownLine className="text-3xl font-bold" />
  )} />
  
</div>


<div
  className="flex items-center gap-2 w-[500px] border-b border-[#F0F0F0] justify-between cursor-pointer"
  onClick={dropdownBtnDistrict}
>
  <Input divclassName={"w-[500px]"} type="text" title="Division" placeholder="Please select" icon={dropdownDistrict ? (
    <RiArrowDropUpLine className="text-3xl font-bold" />
  ) : (
    <RiArrowDropDownLine className="text-3xl font-bold" />
  )} />
  
</div>

</Flex>
          {dropdown && (
            <DropDown
              text={"hello"}
              className={
                "w-[500px]  text-[14px] p-3 absolute bottom-[5%] bg-neutral-200 shadow rounded-2xl left-0 text-center"
              }
            />
          )}

           {dropdownDistrict && (
            <DropDown
              text={"welcome "}
              className={
                "w-[500px]  text-[14px] p-3 absolute bottom-[5%] bg-neutral-200 shadow rounded-2xl left-[520px] text-center"
              }
            />
          )}
              
              
                
 </div>
          <hr className="border-[#F0F0F0] " />
        </Container>
    </div>
    </>
  )
}

export default NewCustomer