import { teams } from "../constantes/Constante"


const Teams = () => {
  return (
    <div className="lg:grid-cols-4 lg:grid gap-2 lg:px-4 px-2 flex overflow-x-auto scroll-smooth  scrollbar-none snap-x snap-mandatory [scroll-marker-group:after] lg:[&::scroll-marker-group]:hidden [&::scroll-marker-group]:flex  [&::scroll-marker-group]:justify-center  [&::scroll-marker-group]:gap-2  [&::scroll-marker-group]:mt-2 [&::scroll-marker-group]:p-2 my-10" id="Team">
        {teams.map((item, index)=>(
            <div key={index} className={`relative mt-10 shrink-0  w-full md:w-1/2 lg:w-full  snap-center md:snap-start [&::scroll-marker]:content-['']  [&::scroll-marker]:bg-gray-300 [&::scroll-marker]:rounded-full [&::scroll-marker]:w-3 [&::scroll-marker]:h-3 [&::scroll-marker:target-current]:bg-gray-400 [&::scroll-marker]:cursor-pointer ${index % 2 !== 0 && 'md:[&::scroll-marker]:content-none'}`}>
                <img src={item.image} alt={item.nom} className="rounded-t-lg w-full"/>
                <div className="flex-col flex items-center bg-white py-4 rounded-b-lg">
                    <h2 className="font-bold text-xl">{item.nom}</h2>
                    <h3 className="opacity-60">{item.poste}</h3>
                </div>
                <div className="flex flex-col text-center justify-center items-center w-full h-full absolute top-0 opacity-0 hover:opacity-80 bg-blue-500 duration-300 transition-all ease-in text-white leading-loose rounded-lg cursor-pointer">
                    <h2 className="font-bold">{item.nom}</h2>
                    <h3>{item.poste}</h3>
                    <p>{item.description}</p>
                    <div className="flex gap-4 justify-center items-center font-bold">
                        {<item.socialMedia.facebook />}
                        {<item.socialMedia.twitter />}
                        {<item.socialMedia.insta />}
                        {<item.socialMedia.basket />}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Teams