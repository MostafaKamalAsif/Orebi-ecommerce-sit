import React from 'react'
import Container from '../Container'
import Headding from '../Headding'
import Flex from '../Flex'
import { Link } from 'react-router-dom'

const SignUpIntro = () => {
  return (
    <div className="pt-[124px] ">
        <Container>
             <Headding
            as={"h3"}
            text={"Sign up"}
            className={"text-[49px] font-bold"}
          />
          
          <Flex className={"flex items-center gap-x-1.5 text-menuText "}>
            <Link to={"/"}>
              <Headding as={"h4"} text={"Home"} />
            </Link>
            <Headding
              as={"h4"}
              text={"> sign up"}
              className={"cursor-pointer"}
            />
          </Flex>
          <Headding
            as={"p"}
            text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.`}
            className={
              "w-[644px] text-[#767676] text-[16px] leading-7.5 pt-[127px] pb-[62px]"
            }
          />
          <hr className="border-[#F0F0F0]" />
        </Container>
    </div>
  )
}

export default SignUpIntro