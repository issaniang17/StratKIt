import { useParams } from "react-router-dom"
import { ServiceCard } from "../constantes/Constante"


const ServiceDetail = () => {
    const {id} = useParams()
    const service = ServiceCard.find((serv )=> serv.id === Number(id))
    if(!service){
        return <div className="bg-blue-300 flex justify-center items-center tracking-tight  h-screen">
            <p>Service non trouve</p>
        </div>
    }

  return (
    <div className="flex flex-col px-4 md:px-12 md:flex-row gap-8 w-full md:justify-center md:items-center h-full bg-gray-300" key={service.id}>
        <div className="w-full md:w-1/2 flex justify-center mb-2 md:mb-8 py-8">
            <img src={service.icon} alt={service.title} className="md:size-40" />
        </div>
        <div className="w-full md:w-1/2 space-y-3 py-10">
            <h2 className="font-bold capitalize md:text-4xl">{service.title}</h2>
            <p className="font-normal opacity-80">{service.description}</p>
            <p className="font-normal opacity-80">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto labore corporis ea! Distinctio voluptas excepturi quae at suscipit dignissimos quis, fugit iste illum id corrupti iure, earum, sequi nisi eligendi dolore maiores aperiam eum ad alias commodi incidunt officia? Similique cumque officia quos dolorem enim, quasi modi ipsum consequatur mollitia.</p>
        </div>
    
    </div>
  )
}

export default ServiceDetail