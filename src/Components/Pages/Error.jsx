import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image'
import errorgif from "/src/assets/error.gif"

const Error = () => {
  return (
    <>
    <Link to={"/"}>
    <Image imgsrc={errorgif} className={'m-auto '}/>
    </Link>
    </>
  )
}

export default Error