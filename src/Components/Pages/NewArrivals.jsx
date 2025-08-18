import React from "react";
import Headding from "../Headding";
import Container from "../Container";
import Product from "../Layouts/Product";
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

const NewArrivals = () => {
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     nextArrow: <NextArrow />,
     prevArrow: <PrevArrow />
    
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
<Slider {...settings}>
      <div className="px-2">
        <Link to={"/"}>
        <Product productImg={new_1} className={"w-full"} tag={"10%"} /></Link>
      </div>
      <div  className="px-2">
        <Link to={"/"}>
          <Product productImg={new_2} className={"w-full"} tag={"New"} /></Link>
      </div>
      <div  className="px-2">
        <Link to={"/"}>
       <Product productImg={new_3} className={"w-full"} tag={"New"} /></Link>
      </div>
      <div  className="px-2">
        <Link to={"/"}>
         <Product productImg={new_4} className={"w-full"} tag={"New"} /></Link>
      </div>
      <div  className="px-2">
        <Link to={"/"}>
         <Product productImg={new_5} className={"w-full"} tag={"New"} /></Link>
      </div>
      <div  className="px-2">
        <Link to={"/"}>
        <Product productImg={new_6} className={"w-full"} tag={"New"} /></Link>
      </div>
    </Slider>
        </Container>
      </div>
    </>
  );
};

export default NewArrivals;
