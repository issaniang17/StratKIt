
import About from "../components/About"
import Hero from "../components/Hero"
import Portfolio from "../components/Portfolio"
import Pricing from "../components/Pricing"
import Results from "../components/Results"
import Service from "../components/Service"
import Skills from "../components/Skills"
import Teams from "../components/Teams"
import Testimonials from "../components/Testimonials"
import TitleSection from "../components/TitleSection"
import Localisation from "../components/Localisation"
import Footer from "../components/Footer"
import Contact from "../components/Contact"


const Home = () => {
  return (
    <div>
        
      <section id="Home">
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section className="bg-gray-200">
        
        <Service />
      </section>
      <section className="py-36">
        <TitleSection titre="Our Skills" color="text-green-800"/>
        <Skills />
      </section>
      <section className=" bg-gray-200 my-20">
        
        <Portfolio />
      </section>
      <section className="py-36">
        <Results />
      </section>
      <section className=" bg-gray-200">
        <Teams />
      </section>
      <section>
        <Pricing />
      </section>
      <section  className="py-36">
        <TitleSection titre="Testimonials" color="text-slate-900"/>
        <Testimonials />
      </section>
      <section  className=" bg-slate-900" >
        
        <Contact />
      </section>
      <section>
        <Localisation />
      </section>
      <Footer />
    </div>
  )
}

export default Home