import Contact from '@/components/Contact'
import GridEvents from '@/components/Events'
import FAQList from '@/components/Faq'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import SideNav from '@/components/SideNav'
import Testimonial from '@/components/Testimonial'
import VideoSections from '@/components/VideoSections'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero/>
      <section  className="bg-gradient-to-r from-red-800 to-zinc-900">
      <VideoSections/>
      </section>
      <SideNav/>
      <GridEvents/>
      <section  className="bg-gradient-to-r from-red-800 to-zinc-900">
      <Grid/>
      </section>
      <Testimonial/>
      <Contact/>
      <section className="bg-gradient-to-r from-red-800 to-zinc-900">
      <FAQList/>
      </section>
    </div>
  )
}

export default Home