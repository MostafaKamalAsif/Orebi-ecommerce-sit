import React, { useState } from "react";


import SignUpIntro from "../Layouts/SignUpIntro";
import PersonalDetails from "../Layouts/PersonalDetails";
import NewCustomer from "../Layouts/NewCustomer";
import { Password } from "../Layouts/Password";

const SignUp = () => {

  return (
    <>
    
    <SignUpIntro/>
    <PersonalDetails/>
    <NewCustomer/>
     <Password/>
    </>
  );
};

export default SignUp;
