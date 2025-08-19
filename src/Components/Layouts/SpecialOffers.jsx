import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from './Product'
import Table from "/src/assets/table.png"
import HeadPhone from "/src/assets/Headphone.png"
import Cap from "/src/assets/cap.png"
import SunGlass from "/src/assets/SunGlass.png"
import Headding from '../Headding'
import { Link } from 'react-router-dom'
const SpecialOffers = () => {
  return (
    <>
      <div className="pb-[108px]">
        <Container>
            
             <Headding
            as={"h3"}
            text={"Our Bestsellers"}
            className={"font-bold text-black text-[39px] pb-[48px]"}
          />
        <Flex className={"gap-x-10"}>
            <Link to={"/"}>
        <Product productImg={Cap} className={"w-full "} tag={"New"} ProductName={"Basic Crew Neck Tee"} ProductPrice={"$44.00"} text={"Black"}/></Link>

        <Link to={"/"}>
        <Product productImg={Table} className={"w-full "} tag={"New"} ProductName={"Basic Crew Neck Tee"} ProductPrice={"$44.00"} text={"Black"}/></Link>

        <Link to={"/"}>
        <Product productImg={HeadPhone} className={"w-full "} tag={"New"} ProductName={"Basic Crew Neck Tee"} ProductPrice={"$44.00"} text={"Black"}/></Link>

        <Link to={"/"}>
        <Product productImg={SunGlass} className={"w-full "} tag={"New"} ProductName={"Basic Crew Neck Tee"} ProductPrice={"$44.00"} text={"Black"}/></Link>
        </Flex>
        </Container>
        </div>
    </>
  )
}

export default SpecialOffers