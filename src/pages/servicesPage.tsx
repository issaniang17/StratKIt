import { Link } from "react-router-dom"
import { ServiceCard } from "../constantes/Constante"


const Services = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-3 md:px-8 py-20 bg-linear-to-b from-gray-400 md:from-10% from-3%  to-gray-200 to-3% md:to-10%">
        {ServiceCard.map((item, index)=>(
            <Link key={index} to={`${item.id}`}  className="flex flex-col items-center justify-center sm:justify-start sm:items-start p-4 text-center sm:text-start hover:shadow-md hover:bg-white rounded-lg transition duration-300">
                 {typeof item.icon === "string" ? (
            <img src={item.icon} alt={item.title} className="my-4" />
          ) : (
            <div className="my-4 text-green-500 font-semibold">{item.icon}</div>
          )}

          <h2 className="my-2 font-bold text-2xl">{item.title}</h2>
          <p className="opacity-50">{item.description}</p>
            </Link>
        ))}
    </div>
  )
}

export default Services