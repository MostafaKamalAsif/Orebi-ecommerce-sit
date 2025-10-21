import React, { useEffect, useState } from 'react'
import Container from '../Container'
import axios from 'axios'
import Product from '../Layouts/Product'
import Flex from '../Flex'
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from 'react-router-dom'

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
           
         <Flex className={"  gap-x-[15px]  -mr-[80px] flex-wrap pt-10  "}>
   
        {curreantproduct.map((item, x) => (
  <Link
    to={`/product/${item.id || x}`}  // Unique URL for each product
    state={{ product: item }}        // Pass the product details
    key={x}
    className="w-[23%] px-4 flex flex-col"
  >
    <Product
      productImg={item.img?.formats?.thumbnail?.url || item.image}
      imgclassName={!item.img ? 'h-[300px] object-contain w-full m-auto pt-13 pb-6 bg-[#D8D8D8]/50' : ""}
      tag={item.image ? "New" : "10%"}
      ProductName={item.title}
      ProductPrice={item.price}
      className="h-[390px] flex flex-col"
    />
  </Link>
))}
          </Flex>

         <div className="flex items-center justify-center m-auto py-7 gap-x-4 ">
            <button disabled={currantpage===0} className={` w-[25px] cursor-pointer ${currantpage===0?"text-black/50 ":""}` } onClick={gotoPrevPage}><GrFormPrevious className='text-2xl ' /></button>
            {[...Array(onpageproduct).keys()].map((page,i)=>
            <>
           
            <span className={`px-2    w-[25px] border mx-1 cursor-pointer  ${currantpage===page? 'bg-neutral-300 border-2 border-neutral-300 text-white ':""}` } onClick={()=>{pagechange(page)}} key={i}>{page+1}</span>
             
           </> )}
           <button disabled={currantpage===onpageproduct-1} className={` w-[25px] cursor-pointer ${currantpage===onpageproduct-1?"text-black/50 ":""}` }  onClick={gotoNextPage}><MdOutlineNavigateNext className='text-2xl '/> </button>
          </div>
      </Container>
    </div>
    </>
  )
}

export default Shop