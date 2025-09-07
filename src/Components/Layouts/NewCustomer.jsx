import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Headding from '../Headding'
import Flex from '../Flex'
import Input from '../Input'
import DropDown from '../DropDown'
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import axios from 'axios'
const NewCustomer = () => {
      const [dropdown, setdropdown] = useState(false);
      const [dropdownDistrict, setdropdownDistrict] = useState(false);
      const [Divison, setDivison] = useState([]);
      const [selectedDivison, setselectedDivison] = useState("");
      const [District, setDistrict] = useState([]);
      const [selectedDistrict, setselectedDistrict] = useState("");
      const [selectedDivisionId, setselectedDivisionId] = useState("");
     
      
      useEffect(()=>{
        async function allDivisons() {
          let allDeivison=await axios.get("https://raw.githubusercontent.com/ifahimreza/bangladesh-geojson/master/bd-divisions.json")
          setDivison(allDeivison.data.divisions); 
          
        }
async function allDistrict() {
          let Districts=await axios.get( "https://raw.githubusercontent.com/ifahimreza/bangladesh-geojson/master/bd-districts.json")
          setDistrict(Districts.data.districts); 
        
          
        }
 allDistrict()
        allDivisons()
      },[])

     
     
    const dropdownBtnDistrict = () => {
        setdropdownDistrict(!dropdownDistrict);
      };
      const dropdownBtn = () => {
        setdropdown(!dropdown);
      };
      // Filtered Districts
const filteredDistricts = District.filter(
  (item) => item.division_id === selectedDivisionId
);
  return (
    <>
    <div className="">
        <Container>
                  <Headding
            as={"h4"}
            text={"New Customer"}
            className={"pt-[58px] pb-10.5 font-bold text-[39px] text-menuHover"}
          />
          <Flex className={"flex-wrap  gap-7  pb-6 "}>
            <Input
              type={"text"}
              placeholder={"4279 Zboncak Port Suite 6212"}
              title={"Address 1"}
            />
            <Input type={"text"} placeholder={"_"} title={"Address 2"} />
            <Input type={"number"} placeholder={"05228"} title={"City "} />
            <Input
              type={"number"}
              placeholder={"Your phone number"}
              title={"Post Code "}
            />
            </Flex>


            <div className=" cursor-pointer  relative pb-[69px]">
                <Flex className={"gap-x-6"}>
        {/* Divisions  */}
<div
  className="flex items-center gap-2 w-[500px] border-b border-[#F0F0F0] justify-between cursor-pointer"
  onClick={dropdownBtn}
>
  <Input divclassName={"w-[500px]"} type="text" value={selectedDivison} title="Division" placeholder="Please select" icon={dropdown ? (
    <RiArrowDropUpLine className="text-3xl font-bold" />
  ) : (
    <RiArrowDropDownLine className="text-3xl font-bold" />
  )} />
  
</div>


<div
  className="flex items-center gap-2 w-[500px] border-b border-[#F0F0F0] justify-between cursor-pointer"
  onClick={dropdownBtnDistrict}
>
  <Input divclassName={"w-[500px]"} type="text" title="District" value={selectedDistrict} placeholder="Please select" icon={dropdownDistrict ? (
    <RiArrowDropUpLine className="text-3xl font-bold" />
  ) : (
    <RiArrowDropDownLine className="text-3xl font-bold" />
  )} />
  
</div>

</Flex>  
{dropdown && (
<div className="w-[500px] p-3 absolute top-[55%] bg-neutral-100 shadow rounded-2xl left-0 ">{
Divison.map((item)=> (
 
           <DropDown
          
              text={item.bn_name}
              className={
                "  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              }
               onClick={() => {
          setselectedDivison(item.bn_name); // Update input
          setdropdown(false); 
           setselectedDivisionId(item.id);     // Save division ID
          setselectedDistrict("");                   // Reset district
        }}
            />
         
 
            ))}
            </div>
 )}         

    {dropdownDistrict && (
  <div className="w-[500px] p-3 absolute top-[55%] bg-neutral-100 shadow rounded-2xl left-[520px]">
    {filteredDistricts.length > 0 ? (
      filteredDistricts.map((item) => (
        <DropDown
          key={item.id}
          text={item.bn_name}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            setselectedDistrict(item.bn_name); // Set district name
            setdropdownDistrict(false);        // Close dropdown
          }}
        />
      ))
    ) : (
      <p className="px-4 py-2 text-sm text-gray-500">No districts found</p>
    )}
  </div>
)}

                
 </div>
          <hr className="border-[#F0F0F0] " />
        </Container>
    </div>
    </>
  )
}

export default NewCustomer