import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import Headding from '../Headding'
import Flex from '../Flex'
import Input from '../Input'
import { Button } from '../ui/button'

const Contacts = () => {
  return (
    <>
    <div className="">
      <Container  className={"py-[124px]"}>
         <Headding as={"h1"} text={"Contacts"} className={"font-bold text-[#262626] text-3xl"}/>
       <Flex className={"flex items-center gap-x-1.5 pt-3 text-menuText "}>
            <Link to={"/"}>
              <Headding as={"h4"} text={"Home"} />
            </Link>
            <Headding
              as={"h4"}
              text={"> Contacts"}
              className={"cursor-pointer"}
            />
          </Flex>
              <Headding as={"h3"} text={"Fill up a Form"}  className={'font-bold text-[#262626] text-2xl pt-[100px] pb-11'}inputclass={" py-4"}/>
              <Input title={"Name"} className={"font-bold text-[16px]"} type={"text"} placeholder={"Your name here"}inputclass={" py-4"}/>
              <Input title={"Email"} className={"font-bold text-[16px] pt-5"} type={"email"} placeholder={"Your email here"} inputclass={" py-4"}/>
              <Input title={"Message"} className={"font-bold text-[16px] pt-5 "} type={"text"} placeholder={"Your message here"} inputclass={"h-[138px] -mt-7 "}/>
              <Button className={"mt-7.5 py-5 px-[85px]"}>Post</Button>
              
        
   <div className="mt-16 w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Dhaka Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.95338886736!2d90.41968899999999!3d23.7808405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1760793147675!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </Container>
    </div>
    </>
  )
}

export default Contacts