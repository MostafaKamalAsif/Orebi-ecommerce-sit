import React from 'react'
import Container from '../Container'
import Headding from '../Headding'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import Input from '../Input'

const Checkout = () => {
  return (
    <>
    <div className="py-[128px]">
        <Container>
            <Headding as={"h1"} text={"Checkout"} className={"font-bold text-[#262626] text-3xl"}/>
                   <Flex className={"flex items-center gap-x-1.5 pt-3 text-menuText "}>
                        <Link to={"/"}>
                          <Headding as={"h4"} text={"Home"} />
                        </Link>
                        <Headding
                          as={"h4"}
                          text={"> Checkout"}
                          className={"cursor-pointer"}
                        />
                      </Flex>
            <Headding as={"h3"} text={"Have a coupon? Click here to enter your code"} className={"py-[100px] text-[#767676] text-[16px]"}/>
            <Headding as={"h3"} text={"Billing Details"} className={"pb-[42px] font-bold text-[#262626] text-[39px]"}/>
                      <Flex className={"gap-x-7.5"}>
                        <Input title={"First Name *"} className={"font-semibold"} type={"text"} placeholder={"First Name"}/>
                        <Input title={"Last Name *"}  className={"font-semibold"}  type={"text"} placeholder={"Last Name"}/>
                      </Flex>
                        <Input title={"Companye Name (optional)"} className={"font-semibold pt-6"}  type={"text"}placeholder={"Company Name"}/>
                        <Input title={"Country *"} className={"font-semibold pt-6"} placeholder={"Please select"} />
                        <Input title={"Street Address *"} className={"font-semibold  pt-6"}  type={"text"}placeholder={"House number and street name"}/>
                        <Input    placeholder={"Apartment, suite, unit etc. (optional)"}/>
                        <Input title={"Town/City *"}  className={"font-semibold pt-6"}  type={"text"} placeholder={"Town/City"}/>
                        <Input title={"County (optional)"}  className={"font-semibold pt-6"} type={"text"}  placeholder={"County"}/>
                        <Input title={"Post Code *"}  className={"font-semibold pt-6"}  type={"text"} placeholder={"Post Code"}/>
                        <Input title={"Phone *"}  className={"font-semibold pt-6"}  type={"text"} placeholder={"Phone"}/>
                        <Input title={"Email Address *"}  className={"font-semibold pt-6"} type={"email"} placeholder={"Email"}/>
 <div className="py-[100px]">
            <Headding as={"h3"} text={"Additional Information"} className={"pb-[42px] font-bold text-[#262626] text-[39px]"}/>
           
                        <Input title={"Other Notes (optional)"}  className={"font-semibold pt-6"}  type={"text"} placeholder={"Notes about your order, e.g. special notes for delivery."}/>
            
          

 </div>

        </Container>
    </div>
    </>
  )
}

export default Checkout