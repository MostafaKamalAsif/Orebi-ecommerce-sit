import React from 'react'
import Banner from '../Layouts/Banner'
import Intro from '../Layouts/Intro'
import Ads from '../Layouts/Ads'
import NewArrivals from '../Layouts/NewArrivals'
import Bestsellers from '../Layouts/Bestsellers'
import Ads_2 from '../Layouts/Ads_2'
import SpecialOffers from '../Layouts/SpecialOffers'



const Home = () => {
  return (
    <>
    <Banner/>
    <Intro/>
    <Ads/>
    <NewArrivals/>
    <Bestsellers/>
    <Ads_2/>
    <SpecialOffers/>
    </>
  )
}

export default Home