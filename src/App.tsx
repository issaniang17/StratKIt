import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Localisation from "./components/Localisation"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Pricing from "./components/Pricing"
import Results from "./components/Results"
import Service from "./components/Service"
import Skills from "./components/Skills"
import Teams from "./components/Teams"
import Testimonials from "./components/Testimonials"
import TitleSection from "./components/TitleSection"

function App() {
 

  return (
    <>
      <Navbar />
      <section id="Home">
        <Hero />
      </section>
      <section className="py-36">
        <About />
      </section>
      <section className="py-36 bg-gray-200">
        <TitleSection titre="Our Services"/>
        <Service />
      </section>
      <section className="py-36">
        <TitleSection titre="Our Skills" color="text-green-800"/>
        <Skills />
      </section>
      <section className="py-36 bg-gray-200 my-20">
        <TitleSection titre="Our Portfolio" color="text-slate-900"/>
        <Portfolio />
      </section>
      <section className="py-36">
        <Results />
      </section>
      <section className="py-36 bg-gray-200">
        <TitleSection titre='Our Team' color="text-slate-900"/>
        <Teams />
      </section>
      <section>
        <Pricing />
      </section>
      <section  className="py-36">
        <TitleSection titre="Testimonials" color="text-slate-900"/>
        <Testimonials />
      </section>
      <section  className="py-36 bg-slate-900" id="Contact">
        <TitleSection titre="Contact" color="text-white sm:text-start pl-5"/>
        <Contact />
      </section>
      <section>
        <Localisation />
      </section>
      <Footer />
    </>
  )
}

export default App
