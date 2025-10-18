import React from 'react'
import Container from '../Container'
import Headding from '../Headding'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import Image from '../Image'
import clock from '/src/assets/new_1.png'
import basket from '/src/assets/Fbasket.png'
import { Button } from '../ui/button'

const About = () => {
  return (
     <>
    <div className="">
      <Container className={"py-[124px] "}>
       <Headding as={"h1"} text={"About"} className={"font-bold text-[#262626] text-3xl"}/>
       <Flex className={"flex items-center gap-x-1.5 pt-3 text-menuText "}>
            <Link to={"/"}>
              <Headding as={"h4"} text={"Home"} />
            </Link>
            <Headding
              as={"h4"}
              text={"> About"}
              className={"cursor-pointer"}
            />
          </Flex>
          <Flex className={"justify-between gap-x-5 pt-[136px]"}>
                 <div className="relative">
                  <Image imgsrc={clock}/>
                  <Link to={"/shop"}>
                  <Button className={"absolute bottom-1/10 left-1/2 -translate-x-1/2 cursor-pointer"}>Our Brands</Button></Link>
                 </div>
                 <div className="relative">
                  <Image imgsrc={basket}/>
                  <Link to={"/shop"}>
                   <Button className={"absolute bottom-1/10 left-1/2 -translate-x-1/2 cursor-pointer"}>Our Stores</Button></Link>
                 </div>
          </Flex>
          <Headding as={'p'} text={`Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.` } className={"text-[30px] leading-[52px]  py-[118px]"}/> 
          <Flex className={"justify-between gap-x-10"}>
            <div className="">
              <Headding as={"h3"} text={"Our Vision"} className={"text-[25px] text-[#262626] font-bold pb-3"}/>
              <Headding as={"p"} text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.`} className={"text-[16px] text-[#767676] leading-[30px]"}/>
            </div>
             <div className="">
              <Headding as={"h3"} text={"Our Story"} className={"text-[25px] text-[#262626] font-bold pb-3"}/>
              <Headding as={"p"} text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.`} className={"text-[16px] text-[#767676] leading-[30px]"}/>
            </div>

             <div className="">
              <Headding as={"h3"} text={"Our Brands"} className={"text-[25px] text-[#262626] font-bold pb-3"}/>
              <Headding as={"p"} text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.`} className={"text-[16px] text-[#767676] leading-[30px]"}/>
            </div>
          </Flex>
      </Container>
    </div>
    </>
  )
}

export default About