import React from 'react'

const Tag = ( {tagtext,className}) => {
  return (
    <>
      <div className={`w-[92px] py-2 px-7.5 bg-black text-white font-bold ${className}`}>
        {tagtext}
      </div>
    </>
  )
}

export default Tag