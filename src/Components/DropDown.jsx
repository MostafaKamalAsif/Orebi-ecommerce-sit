import React from 'react'

const DropDown = ({className,text}) => {
    

  return (
           <>
           <div className="">
            <ul className=''>
                <li className={className}>{text}</li>
            </ul>
           </div>
           </>
  )
}

export default DropDown