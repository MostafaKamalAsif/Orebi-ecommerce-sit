import axios from "axios";
import React, { useEffect, useState } from "react";

const Autosearch = ({input,setinput,barshow, setbarshow}) => {

  let [searchitem, setsearchitem] = useState([]);
  let[cache,setcache]=useState({})
  
  //search item api
  useEffect(() => {
  
    const timer = setTimeout(() => {
      async function allproduct() {
        
    if (cache[input]) {
        setsearchitem(cache[input])
        return; 
    }
       console.log("call " +input);
       
        try {
          let myapi = await axios.get(
            "https://mostafakamalasif.github.io/Orebi-API/index.json" 
          );
          let fakeapi = await axios.get(
            "https://fakestoreapi.com/products/" 
          );
          let all = [...myapi.data.data, ...fakeapi.data];
           
          // Filter locally based on input
          let filtered = all.filter((item) =>
           
               item.title.toLowerCase().includes(input.toLowerCase()) 
         
            
          )
          setsearchitem(filtered);
          setcache((prev)=>({...prev,[input]:filtered}))
        } catch (error) {
             console.error(error);
        }
      }

      allproduct();
    }, 350);
    return(()=> 
    clearTimeout(timer)
    )
  }, [input]);
  return (
    <>
      {barshow && (
        <div className="absolute top-[55px]  w-601px max-h-[200px] bg-white overflow-x-scroll z-11">
          {searchitem.map((item) => (
            <>
              <ul className="flex items-center gap-3 py-1 px-3 hover:bg-neutral-200 duration-150 cursor-pointer">
                <li className="w-[7%] ">
                  <img src={item.img?.formats?.thumbnail?.url || item.image} />
                </li>
                <li className="text-black ">{item.title}</li>
              </ul>
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default Autosearch;
