import Contact from '@/components/Contact'
import GridEvents from '@/components/Events'
import FAQList from '@/components/Faq'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import SideNav from '@/components/SideNav'
import Testimonial from '@/components/Testimonial'
import VideoSections from '@/components/VideoSections'

const Home = () => {
  return (
    <div>
      <Hero/>
      <section  className="bg-gradient-to-r from-red-950 to-black">
      <VideoSections/>
      </section>
      <SideNav/>
      <GridEvents/>
      <section  className="bg-gradient-to-r from-red-950 to-black">
      <Grid/>
      </section>
      <Testimonial/>
      <Contact/>
      <section className="bg-gradient-to-r from-red-950 to-black">
      <FAQList/>
      </section>
    </div>
  )
}

export default Home