import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Headding from "../Headding";
import Flex from "../Flex";
import Input from "../Input";
import DropDown from "../DropDown";

import SignUpIntro from "../Layouts/SignUpIntro";
import PersonalDetails from "../Layouts/PersonalDetails";
import NewCustomer from "../Layouts/NewCustomer";

const SignUp = () => {

  return (
    <>
    <SignUpIntro/>
    <PersonalDetails/>
    <NewCustomer/>
     
    </>
  );
};

export default SignUp;
