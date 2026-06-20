import { useState } from "react"
import { All, portfolioOptions, Markrting, Integration, Development, Optimization } from "../constantes/Constante"
import { Plus } from "lucide-react"


const Portfolio = () => {
    const [card, setCard] = useState(All)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
          const valeur =event.target.value
          if(valeur === 'Development'){
            setCard(Development)
          }else if(valeur === 'Markrting'){
            setCard(Markrting)
          }else if(valeur === 'Optimization'){
            setCard(Optimization)
          }else if(valeur === 'Integration'){
            setCard(Integration)
          }else if(valeur === 'All'){
            setCard(All)
          }
        }
   
   

  return (
    <div className="flex flex-col items-center mb-10 px-10" id="Portfolio">
        <ul className="flex gap-5 text-xl flex-wrap justify-center my-10">
            {portfolioOptions.map((item, index)=>(
                <li key={index}><button value={item} onClick={handleClick}>{item}</button></li>
            ))}
        </ul>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
           {card.map((item, index)=>(
            <div key={index} className="relative">
                <img src={item}alt={item}/>
                <div className="h-full w-full flex  bg-blue-700 opacity-0  absolute top-0 justify-center items-center text-white duration-300 transition-all ease-in hover:opacity-70">
                    <Plus />
                </div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default Portfolio