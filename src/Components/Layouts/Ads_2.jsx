import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Adstwo from "/src/assets/Ads_2.png";
import { Link } from 'react-router-dom';
const Ads_2 = () => {
  return (
    <>
    <Container className={"py-[128px]"}>
        <Link to={"/shop"}>
     <Image imgsrc={Adstwo} className={"w-full"}/></Link>
    </Container>
    </>
  )
}

export default Ads_2