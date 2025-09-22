import React from 'react'

const Autosearch = () => {
     let[input, setinput]=useState("")
      let[searchitem, setsearchitem]=useState([])
      let[barshow, setbarshow]=useState(false)
      //search item api
        useEffect(()=>{
          async function allproduct() {
            let myapi=await axios.get("https://mostafakamalasif.github.io/Orebi-API/index.json?q=" +input)
            let fakeapi=await axios.get("https://fakestoreapi.com/products/?q=" +input)
            let all=[...myapi.data.data,...fakeapi.data]
      
         
         
          // Filter locally based on input
          let filtered = all.filter((item) =>
            item.title.toLowerCase().includes(input.toLowerCase())
          );
      
          setsearchitem(filtered);
         }
      
          allproduct()
        },[input])
  return (
    <>
     { barshow &&(
               <div className="absolute top-[55px]  w-601px max-h-[200px] bg-white overflow-x-scroll ">
              {searchitem.map((item)=>
              <>
              <ul className="flex items-center gap-3 py-1 hover:bg-neutral-200 duration-150 cursor-pointer">
              <li className="w-[7%] "><img src={item.img?.formats?.thumbnail?.url || item.image}  /></li>
              <li className="text-black " >{item.title}</li>
              </ul>
              </>
              )}
              </div>
             ) }
    </>
  )
}

export default Autosearch