import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
    <Link to={"/shop"}>
    <div className="bg-[url(/src/assets/banner.png)] py-[300px] cursor-pointer bg-no-repeat bg-cover bg-center">
    
    </div>
    </Link>
    </>
  )
}

export default Banner