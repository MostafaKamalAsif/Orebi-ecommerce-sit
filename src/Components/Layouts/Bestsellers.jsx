import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from './Product'
import FlowerPot from "/src/assets/flowerpot.png"
import FashionBag from "/src/assets/Fbag.png"
import Cap from "/src/assets/cap.png";
import SchoolBag from "/src/assets/Sbag.png"
import Headding from '../Headding'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Bestsellers = () => {
let [alldata,setalldata]=useState([])
useEffect(()=>{
  async function alldatas() {
    let data=await axios.get("https://mostafakamalasif.github.io/Orebi-API/index.json")
    setalldata(data.data.data)
  }
alldatas()

},[])

  return (
    <>
    <div className="">
        <Container>
            
             <Headding
            as={"h3"}
            text={"Our Bestsellers"}
            className={"font-bold text-black text-[39px] pb-[25px]"}
          />
        <Flex className={"gap-x-10"}>
          {
          alldata.slice(-4).map((iteam)=>
           <Link to={"/"}>
        <Product productImg={iteam.img.formats.thumbnail.url}  tag={"New"} ProductName={iteam.title} ProductPrice={`${iteam.price}`} /></Link>
        
)}
        
        </Flex>
        </Container>
        </div>
        </>
  )
}

export default Bestsellers