import Contact from '@/components/Contact'
import GridEvents from '@/components/Events'
import FAQList from '@/components/Faq'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import SideNav from '@/components/SideNav'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero/>
      <SideNav/>
      <GridEvents/>
      <Grid/>
      <Testimonial/>
      <Contact/>
      {/* <FAQList/> */}
    </div>
  )
}

export default Home