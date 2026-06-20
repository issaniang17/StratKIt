import { Testimonial } from "../constantes/Constante"


const Testimonials = () => {
  return (
    <div className="my-10 flex gap-4 px-4 sm:px-10 overflow-x-auto  scroll-smooth snap-x snap-mandatory scrollbar-none [scroll-marker-group:after] [&::scroll-marker-group]:flex [&::scroll-marker-group]:gap-2 [&::scroll-marker-group]:justify-center [&::scroll-marker-group]:p-2 [&::scroll-marker-group]:mt-4 mx-10 text-justify">
        {Testimonial.map((item, index)=>(
            <div key={index} className={`w-full md:w-1/2  shrink-0 snap-center [&::scroll-marker]:content-[''] [&::scroll-marker]:bg-gray-400 [&::scroll-marker]:rounded-full [&::scroll-marker]:w-3 [&::scroll-marker]:h-3 [&::scroll-marker:target-current]:bg-gray-600  ${index %2 !== 0 && "md:[&::scroll-marker]:content-none"} mt-5 p-2`}>
                <p className="opacity-50 font-normal">{item.description}</p>
                <div className="flex gap-2 mt-8 items-center">
                    <img src={item.photo}alt={item.nom} className="rounded-full size-20"/>
                    <div>
                        <h2 className="font-bold">{item.nom}</h2>
                        <h3 className="opacity-50">{item.poste}</h3>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Testimonials