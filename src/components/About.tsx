import TitleSection from "./TitleSection"
import aboutus from "../assets/about/aboutus.png"
import founder from "../assets/about/founder.jpg"

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mx-8 my-10"  id="About us">
        <div className="relative lg:w-[40%] mr-3">
            <img src={aboutus} alt="about" />
            <div className="w-40 h-40 flex flex-col items-center justify-center bg-green-400  text-white p-2 rounded-sm absolute bottom-2 -left-5">
                <h2 className="font-bold text-4xl mb-2">12</h2>
                <h3 className="font-normal">Years</h3>
                <h3 className="font-normal">Experience</h3>
            </div>
            
        </div>
        <div className="lg:w-[60%] leading-relaxed ml-3">
            <TitleSection titre="About Creative Agency" color="text-slate-900 text-start"/>
            <div className="opacity-50 font-normal">
                <p className="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptates porro. Unde nemo ipsum maxime libero architecto voluptates, voluptatem assumenda ullam natus consequuntur blanditiis quaerat deserunt perferendis rerum nobis non?</p>
                <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nemo debitis libero sed quidem ducimus ratione maiores, ex deleniti vitae reprehenderit perferendis magni tempore rerum cumque iusto! Omnis, nisi eaque!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, facere numquam a itaque inventore saepe quo adipisci sed ipsam, quaerat, molestias vero! Ad esse, amet dolorum qui iure ex odio.</p>
            </div>
            <div className="mt-10 flex gap-3 items-center">
                <img src={founder} alt="founder" className="w-20 h-20 rounded-full"/>
                <div>
                    <h2 className="font-bold">Richard Nautz</h2>
                    <p className="opacity-50 font-normal">Founder & SEO</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About