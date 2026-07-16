import { Link } from "react-router-dom";
import { ServiceCard } from "../constantes/Constante";
import TitleSection from "./TitleSection";

const Service = () => {
  return (
    <div className="py-36">
      <TitleSection titre="Our Services"/>
    
    <div
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 my-10 mx-10 "
      id="Services"
    >
      {ServiceCard.slice(0, 6).map((item, index) => (
        <Link
          to={`/Services/${item.id}`}
          key={index}
          className="flex flex-col items-center justify-center sm:justify-start sm:items-start p-4 text-center sm:text-start hover:shadow-md hover:bg-white rounded-lg transition duration-300"
        >
          {typeof item.icon === "string" ? (
            <img src={item.icon} alt={item.title} className="my-4" />
          ) : (
            item.icon
          )}

          <h2 className="my-2 font-bold text-2xl">{item.title}</h2>
          <p className="opacity-50">{item.description}</p>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Service;
