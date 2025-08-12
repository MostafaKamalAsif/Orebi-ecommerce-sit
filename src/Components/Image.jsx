import React from 'react'

const Image = ({className,imgsrc}) => {
  return (
    <>
    <img className={`${className}`} src={`${imgsrc}`} alt="" />
    </>
  )
}

export default Image