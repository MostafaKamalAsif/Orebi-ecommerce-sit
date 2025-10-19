import React from 'react'
import Container from '../Container'
import Headding from '../Headding'
import Flex from '../Flex'
import { Link } from 'react-router-dom'

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
            <Headding as={"h3"} text={"Have a coupon? Click here to enter your code"} className={"pt-[100px] text-[#767676] text-[16px]"}/>
                      
        </Container>
    </div>
    </>
  )
}

export default Checkout