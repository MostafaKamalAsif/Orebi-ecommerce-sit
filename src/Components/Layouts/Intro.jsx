import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck,FaUndoAlt } from "react-icons/fa";
import Headding from '../Headding';

const Intro = () => {
  return (
    <>
    <div className="pt-6.5 pb-8 border-1 border-[#F0F0F0]">
        <Container>
            <Flex className={'justify-between'}>
                <div className="flex items-center gap-x-2">
                    <PiNumberTwoBold />
                    <Headding as={'h3'}  className={'text-menuText text-[16px]'} text={'Two years warranty'} />
                </div>
                <div className="flex items-center gap-x-2">
                    <FaTruck />
                    <Headding as={'h3'}  className={'text-menuText text-[16px]'} text={'Free shipping'} />
                </div>
                <div className="flex items-center gap-x-2">
                    <FaUndoAlt />
                    <Headding as={'h3'}  className={'text-menuText text-[16px]'} text={'Return policy in 30 days'} />
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Intro