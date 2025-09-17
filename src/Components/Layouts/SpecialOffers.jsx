import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Headding from "../Headding";
import Product from "./Product";

const SpecialOffers = () => {
let [alldata,setalldata]=useState([])
useEffect(()=>{

async function alldatas() {
  let data=await axios.get("https://fakestoreapi.com/products/")
   setalldata(data.data)

 
}
alldatas()
},[])

  return (
    <>
      <div className="pb-[108px]">
        <Container>
          <Headding
            as={"h3"}
            text={"Special Offers"}
            className={"font-bold text-black text-[39px] pb-[48px]"}
          />
          <Flex className={"  gap-x-[15px] gap-y-10 -mr-[80px] flex-wrap   "}>
          {
            alldata.slice(0,8).map((iteam)=>    
          
           
              <Product
                productImg={iteam.image}
               className={'w-[23%]  px-4  h-[390px]  flex flex-col '}
               imgclassName={' h-[270px] object-contain w-full m-auto pt-13 pb-6 bg-[#D8D8D8]/50'}
                tag={"New"}
                ProductName={iteam.title}
                ProductPrice={`${iteam.price}`}
                
              />
         
          
         ) }
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default SpecialOffers;
