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
