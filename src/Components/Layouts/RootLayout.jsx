import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Toast from '../Toast'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Toast/>
    <Footer/>
    </>
  )
}

export default RootLayout