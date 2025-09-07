import React from 'react'

const DropDown = ({className,text,onClick}) => {
    

  return (
           <>
           <div className="">
            <ul className=''>
                <li className={className} onClick={onClick}>{text}</li>
            </ul>
           </div>
           </>
  )
}

export default DropDown