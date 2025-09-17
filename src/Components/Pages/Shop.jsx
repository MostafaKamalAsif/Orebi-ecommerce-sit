import React, { useEffect, useState } from 'react'
import Container from '../Container'
import axios from 'axios'
import Product from '../Layouts/Product'
import Flex from '../Flex'

const Shop = () => {
  const page_size = 8
  const [currentPage, setCurrentPage] = useState(1)

  const [myproduct, setmyproduct] = useState([])
  const [product, setproduct] = useState([])

  useEffect(() => {
    async function allmyproduct() {
      try {
        const mydata = await axios.get(
          'https://mostafakamalasif.github.io/Orebi-API/index.json'
        )
        setmyproduct(mydata.data.data || [])
      } catch (err) {
        console.error(err)
      }
    }
    allmyproduct()
  }, [])

  useEffect(() => {
    async function allproduct() {
      try {
        const data = await axios.get('https://fakestoreapi.com/products/')
        setproduct(data.data || [])
      } catch (err) {
        console.error(err)
      }
    }
    allproduct()
  }, [])

  // Merge products
  const allProducts = [...myproduct, ...product]
  const totalProducts = allProducts.length
  const totalPages = Math.ceil(totalProducts / page_size) || 1

  // Slice products for current page
  const startIndex = (currentPage - 1) * page_size
  const currentProducts = allProducts.slice(startIndex, startIndex + page_size)

  return (
    <div>
      <Container>
       

        {/* Products */}
        <Flex className="gap-x-[15px] gap-y-10 -mr-[80px] flex-wrap">
          {currentProducts.map((item, i) => (
            <Product
              key={item.id || i}
              className="w-[23%] px-4 pt-2 h-[390px] flex flex-col"
              productImg={item.img?.formats?.thumbnail?.url || item.image}
              tag={item.img ? '10%' : 'New'}
              ProductName={item.title}
              ProductPrice={item.price}
              imgclassName={!item.img ? 'h-[270px] object-contain w-full m-auto pt-13 pb-6 bg-[#D8D8D8]/50' : ''}
            />
          ))}
        </Flex>
         {/* Pagination */}
        <div className="flex justify-center my-5">
          {[...Array(totalPages)].map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 mx-1 border rounded cursor-pointer ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Shop
