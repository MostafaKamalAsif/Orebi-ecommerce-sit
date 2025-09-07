import React from 'react'
import Container from '../Container'
import Headding from '../Headding'
import Flex from '../Flex'
import Input from '../Input'

const PersonalDetails = () => {
  return (
   <>
   <div className="">
    <Container>
        <Headding
            as={"h4"}
            text={"Your Personal Details"}
            className={"pt-[58px] pb-10.5 font-bold text-[39px] text-menuHover"}
          />
          <Flex className={"flex-wrap  gap-7  pb-[69px]"}>
            <Input
              type={"text"}
              placeholder={"First Name"}
              title={"First Name"}
            />
            <Input
              type={"text"}
              placeholder={"Last Name"}
              title={"Last  Name"}
            />
            <Input
              type={"email"}
              placeholder={"company@domain.com"}
              title={"Email address "}
            />
            <Input
              type={"number"}
              placeholder={"Your phone number"}
              title={"Telephone "}
            />
          </Flex>
          <hr className="border-[#F0F0F0] " />
    </Container>
   </div>
   </>
  )
}

export default PersonalDetails