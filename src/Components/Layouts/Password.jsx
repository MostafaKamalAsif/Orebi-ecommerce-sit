import React from 'react'
import Container from '../Container'
import Headding from '../Headding'
import Flex from '../Flex'
import Input from '../Input'

export const Password = () => {
  return (
    <>
    <div className="pb-[140px]">
        <Container>
            <Headding as={'h3'} text={'Your Password'} className={"pt-[58px] pb-10.5 font-bold text-[39px] text-menuHover"}/>
            <Flex className={'pb-[70px] gap-x-7'}>
                <Input type={'password'} placeholder={'Password'} title={'Password'}/>
                <Input type={'password'} placeholder={'Repeat Password'} title={'Repeat Password'}/>
            </Flex>
            <hr className="border-[#F0F0F0] pb-[65px] "  />
           <Flex className={'gap-x-4 pb-6'}>
            <Input divclassName={"w-4"} type={"checkbox" }/>
            <Headding as={'h3'} text={'I have read and agree to the Privacy Policy'} className={'text-menuText '}/>
            </Flex>

            <Flex className={'gap-x-8 pb-6'}>
            
            <Headding as={'h3'} text={'Subscribe Newsletter'} className={'text-menuText '}/>
            <div className="flex items-center gap-x-4">
            <Input divclassName={"w-4"}  type={"checkbox" }/>
            <Headding as={'h3'} text={'Yes'} className={'text-menuText '}/>
</div>
<div className="flex items-center gap-x-4">
            <Input divclassName={"w-4"} type={"checkbox" } />
            <Headding as={'h3'} text={'NO'} className={'text-menuText '}/>
</div>


            </Flex>
             <button  className="py-4 pl-[77px] pr-[83px] bg-black text-white ">Log in</button>
          
        </Container>
    </div>
    
    </>
  )
}
