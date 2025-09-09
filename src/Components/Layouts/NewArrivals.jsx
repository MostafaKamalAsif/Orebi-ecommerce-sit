import React, { useEffect, useState } from "react";
import Headding from "../Headding";
import Container from "../Container";
import Product from "./Product";
import new_1 from "/src/assets/new_1.png";
import new_2 from "/src/assets/SmartWatch.png";
import new_3 from "/src/assets/basket.png";
import new_4 from "/src/assets/SoftToy.png";
import new_5 from "/src/assets/WallClock.png";
import new_6 from "/src/assets/poot.png";
import Flex from "../Flex";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import { Link } from "react-router-dom";
import axios  from "axios";

const NewArrivals = () => {
let [alldata,setalldata]=useState([])  
useEffect(()=>{

  async function alldatas() {
    let data=await axios.get("https://mostafakamalasif.github.io/Orebi-API/index.json")
     setalldata(data.data.data)
  }
alldatas()
},[])

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     nextArrow: <NextArrow />,
     prevArrow: <PrevArrow />,
  
    
    
  };
  return (
    
    <>
    <div className="pb-[118px]">
        <Container>
             <Headding
            as={"h3"}
            text={"New Arrivals"}
            className={"font-bold text-black text-[39px] pb-[48px]"}
          />
<Slider {...settings} className="-mx-5">
  {
    alldata.map((iteam)=>
   
      <div className="px-5">
        <Link to={"/"}>
        <Product productImg={iteam.img.formats.thumbnail.url }  tag={"10%"} ProductName={iteam.title} ProductPrice={ ` ${iteam.price}`}/></Link>
      </div>
       )
  }
     
    </Slider>
        </Container>
      </div>
    </>
  );
};

export default NewArrivals;
