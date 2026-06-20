import bgPricing from "../assets/price/bgpricing.png"
import { checkList, priceItems } from "../constantes/Constante"
import TitleSection from "./TitleSection"

const Pricing = () => {
  return (
    <div className="bg-cover bg-fixed  py-36 bg-blend-multiply bg-green-300 px-10" style={{backgroundImage: `url(${bgPricing})`}} id="Pricing">
        <TitleSection titre="Pricing Plan" color="text-white mb-20"  />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {priceItems.map((item, index)=>(
                item.title === 'Standard Package' ?
                    <div className="text-center text-white space-y-2  bg-blue-500 sm:scale-110 py-10 px-4 " key={index}>
                        <h1 className="text-3xl font-bold text-green-500 my-5">{item.title}</h1>
                        <h2 className="font-bold text-4xl mb-5">{item.price}</h2>
                        <p className="font-normal text-md mb-3">{item.description}</p>
                        {checkList.map((item, index)=>(
                            <div className="flex gap-2" key={index}>
                                {<item.icon className="text-green-400 text-xs"/>}
                                <p className="font-normal text-md">{item.definition}</p>
                            </div>
                        ))}
                    </div> : 
                        <div className="text-center text-gray-400 space-y-2  bg-white py-10 px-4" key={index}>
                            <h1 className="text-3xl font-bold text-blue-500 my-5">{item.title}</h1>
                            <h2 className="font-bold text-4xl text-black mb-5">{item.price}</h2>
                            <p className="font-normal text-md mb-3">{item.description}</p>
                            {checkList.map((item, index)=>(
                                <div className="flex gap-2" key={index}>
                                    {<item.icon className="text-green-400 text-xs"/>}
                                    <p className="font-normal text-md">{item.definition}</p>
                                </div>
                            ))}
                    </div>  
                ))}
        </div>
    </div>
  )
}

export default Pricing