import React from 'react'
import { Link,  } from 'react-router-dom'
import Container from '../Container'
import Headding from '../Headding'
import Flex from '../Flex'
import Input from '../Input'

const SignUp = () => {
  return (
    <>
    <div className="pt-[124px] pb-[140px]">
        <Container>
<Headding as={'h3'} text={'Sign up'} className={'text-[49px] font-bold'}/>
           <Flex className={"flex items-center gap-x-1.5 text-menuText "}>
                <Link to={"./"}>
                <Headding  as={'h4'} text={'Home'}/>
                 </Link>
                 <Headding as={'h4'} text={'> sign up'} className={'cursor-pointer'} />
               </Flex>
         <Headding as={"p"} text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.`} className={'w-[644px] text-[#767676] text-[16px] leading-7.5 pt-[127px] pb-[62px]'}/>
         <hr className='border-[#F0F0F0]'/>
                 <Headding as={'h4'} text={'Your Personal Details'} className={'pt-[58px] pb-10.5 font-bold text-[39px] text-menuHover'} />
           <Flex className={"flex-wrap  gap-7  pb-[69px]"}>
                <Input type={"text"} placeholder={"First Name"} title={"First Name"}/>
                <Input type={"text"} placeholder={"Last Name"} title={"Last  Name"}/>
                <Input type={"email"} placeholder={"company@domain.com"} title={"Email address "}/>
                <Input type={"number"} placeholder={"Your phone number"} title={"Telephone "}/>

</Flex>
<hr className='border-[#F0F0F0] '/>

<Headding as={'h4'} text={'New Customer'} className={'pt-[58px] pb-10.5 font-bold text-[39px] text-menuHover'} />
           <Flex className={"flex-wrap  gap-7  pb-[69px]"}>
                <Input type={"text"} placeholder={"4279 Zboncak Port Suite 6212"} title={"Address 1"}/>
                <Input type={"text"} placeholder={"_"} title={"Address 2"}/>
                <Input type={"email"} placeholder={"05228"} title={"City "}/>
                <Input type={"number"} placeholder={"Your phone number"} title={"Post Code "}/>

</Flex>

<hr className='border-[#F0F0F0] '/>
        </Container>
    </div>
   
    
    </>
    
  )
}

export default SignUp