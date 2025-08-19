import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from './Product'
import FlowerPot from "/src/assets/flowerpot.png"
import FashionBag from "/src/assets/Fbag.png"
// import Cap from "/src/assets/cap.png";
import SchoolBag from "/src/assets/Sbag.png"
import Headding from '../Headding'
import { Link } from 'react-router-dom'

const Bestsellers = () => {
  return (
    <>
    <div className="">
        <Container>
            
             <Headding
            as={"h3"}
            text={"Our Bestsellers"}
            className={"font-bold text-black text-[39px] pb-[48px]"}
          />
        <Flex className={"gap-x-10"}>
           <Link to={"/"}>
        <Product productImg={FlowerPot} className={"w-full "} tag={"New"} ProductName={"Basic Crew Neck Tee"} ProductPrice={"$44.00"} text={"Black"}/></Link>

        <Link to={"/"}>
        <Product productImg={FashionBag} className={"w-full "} tag={"New"} ProductName={"Basic Crew Neck Tee"} ProductPrice={"$44.00"} text={"Black"}/></Link>

        <Link to={"/"}>
        <Product productImg={Cap} className={"w-full "} tag={"New"} ProductName={"Basic Crew Neck Tee"} ProductPrice={"$44.00"} text={"Black"}/></Link>

        <Link to={"/"}>
        <Product productImg={SchoolBag} className={"w-full "} tag={"New"} ProductName={"Basic Crew Neck Tee"} ProductPrice={"$44.00"} text={"Black"}/></Link>
        </Flex>
        </Container>
        </div>
        </>
  )
}

export default Bestsellers