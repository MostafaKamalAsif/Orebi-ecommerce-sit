import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import ad_1 from "/src/assets/Ad_1.svg"
import ad_2 from "/src/assets/Ad_2.svg"
import ad_3 from "/src/assets/Ad_3.svg"
import { Link } from 'react-router-dom'

const Ads = () => {
  return (
    <>
    <div className=" py-[128px] ">
        <Container>
            <Flex className={'justify-between'}>
                <div className="w-[48.5%] ">
                <Link>  <Image imgsrc={ad_1} /></Link>
                    </div>
                    <div className="w-[48.5%] ">
                    <div className="">
                         <Link>  <Image imgsrc={ad_2}  className={''} /></Link>
                    </div>
                    <div className="">
                         <Link>  <Image imgsrc={ad_3} className={'pt-[35px] '} /></Link>
                    </div>
               
                    </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Ads