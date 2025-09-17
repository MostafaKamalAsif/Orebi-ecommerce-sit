import React, { useEffect, useState } from 'react'
import Container from '../Container'
import axios from 'axios'
import Product from '../Layouts/Product'
import Flex from '../Flex'

const Shop = () => {
  
  //My product API
  const [myproduct,setmyproduct]=useState([])
  useEffect(()=>{
    async function allmyproduct() {
      let mydata=await axios.get("https://mostafakamalasif.github.io/Orebi-API/index.json")
      setmyproduct(mydata.data.data)
    }
    allmyproduct()
  },[])
  // Fake store product
  const [product, setproduct]=useState([])
  useEffect(()=>{
 async function allproduct() {
  let data=await axios.get("https://fakestoreapi.com/products/")
  setproduct(data.data)
 }
 allproduct()
  },[])
  return (
     <>
    <div className="">
      <Container>
          
         <Flex className={"  gap-x-[15px] gap-y-10 -mr-[80px] flex-wrap   "}>
    {
            myproduct.map((item)=>
              <Product  className={'w-[23%]  px-4 pt-2 h-[390px]  flex flex-col '}  productImg={item.img.formats.thumbnail.url }  tag={"10%"} ProductName={item.title} ProductPrice={item.price}/>
            )
          }
          {product.map((item)=>
            <Product
                productImg={item.image}
               className={'w-[23%]  px-4  h-[390px]  flex flex-col '}
               imgclassName={' h-[270px] object-contain w-full m-auto pt-13 pb-6 bg-[#D8D8D8]/50'}
                tag={"New"}
                ProductName={item.title}
                ProductPrice={`${item.price}`}
                
              />
          )}
          </Flex>
      </Container>
    </div>
    </>
  )
}

export default Shop