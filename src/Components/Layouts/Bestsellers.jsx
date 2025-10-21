import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from './Product'
import Headding from '../Headding'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Bestsellers = () => {
  let [alldata, setalldata] = useState([])

  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://mostafakamalasif.github.io/Orebi-API/index.json")
      setalldata(data.data.data)
    }
    alldatas()
  }, [])

  return (
    <>
      <div className="">
        <Container>
          <Headding
            as={"h3"}
            text={"Our Bestsellers"}
            className={"font-bold text-black text-[39px] pb-[25px]"}
          />
          <Flex className={"justify-between gap-x-10"}>
            {alldata.slice(-4).map((item, i) => (
              <Link to={`/product/${item.id}||i`} state={{product:item}} key={i}>
                <Product
                className={"w-[300px]"}
                  productImg={item.img.formats.thumbnail.url}
                  tag={"New"}
                  ProductName={item.title}
                  ProductPrice={`${item.price}`}
                  imgclassName="h-[300px] w-full object-contain bg-[#f8f8f8]" // 👈 only applies here
                />
              </Link>
            ))}
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Bestsellers
