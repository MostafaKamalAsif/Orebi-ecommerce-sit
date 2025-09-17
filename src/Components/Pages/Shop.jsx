import React, { useEffect, useState } from 'react'
import Container from '../Container'
import axios from 'axios'
import Product from '../Layouts/Product'
import Flex from '../Flex'


const Shop = () => {
const page_size=8
  const [currantpage,setcurrantpage]=useState(0)

//My API
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
  const allproducts=[...myproduct,...product]
  const totallproduct=allproducts.length
const onpageproduct=Math.ceil(totallproduct/page_size)
const start=currantpage*page_size
const end=start+page_size
const curreantproduct=allproducts.slice(start,end)

const pagechange=(page)=>{
  setcurrantpage(page)
}
const gotoNextPage=()=>{
  setcurrantpage((prev) =>prev+1)
}
const gotoPrevPage=()=>{
  setcurrantpage((prev) =>prev-1)
}


  return (
     <>
    <div className="">
      <Container>
           <div className="flex  justify-center ">
            <span className='mr-2 border px-2' onClick={gotoPrevPage}>Prev</span>
            {[...Array(onpageproduct).keys()].map((page,i)=>
            <>
           
            <span className={`px-2 w-[25px] border mx-1 cursor-pointer  ${currantpage===page? 'bg-neutral-300  text-white ':""}` } onClick={()=>{pagechange(page)}} key={i}>{page+1}</span>
             
           </> )}
           <span className= 'ml-2 border px-2' onClick={gotoNextPage}>Next </span>
          </div>
         <Flex className={"  gap-x-[15px] gap-y-10 -mr-[80px] flex-wrap   "}>
   
          {curreantproduct.map((item,x)=>
            <Product
            key={x}
                productImg={item.img?.formats?.thumbnail?.url || item.image}
               className={'w-[23%]  px-4  h-[390px]  flex flex-col '}
               imgclassName={!item.img? ' h-[270px] object-contain w-full m-auto pt-13 pb-6 bg-[#D8D8D8]/50':""}
                tag={item.image?"New":"10%"}
                ProductName={ item.title }
               ProductPrice={item.price}
                
              />
          )}
          </Flex>

         
      </Container>
    </div>
    </>
  )
}

export default Shop