import { useState } from "react"
import {  portfolioOptions, servicePortfolio } from "../constantes/Constante"
import { Plus } from "lucide-react"
import TitleSection from "./TitleSection"


const Portfolio = () => {
    
    const [card, setCard] = useState(servicePortfolio.all)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
          const valeur =event.currentTarget.value
          const cards = servicePortfolio.all
          if(valeur === 'all'){
           return  setCard(cards)
          }
          const filterCard = cards.filter(item => item.category === valeur)
          setCard(filterCard)
          // if(valeur === 'Development'){
          //   setCard(servicePortfolio.development)
          // }else if(valeur === 'Markrting'){
          //   setCard(servicePortfolio.marketing)
          // }else if(valeur === 'Optimization'){
          //   setCard(servicePortfolio.optimization)
          // }else if(valeur === 'Integration'){
          //   setCard(servicePortfolio.integration)
          // }else if(valeur === 'All'){
          //   setCard(servicePortfolio.all)
          // }
        }
   

   

  return (
    <div className="py-36">
      <TitleSection titre="Our Portfolio" color="text-slate-900"/>
    
    <div className="flex flex-col items-center mb-10 px-10 " id="Portfolio">
        <ul className="flex gap-5 text-xl flex-wrap justify-center my-10">
            {portfolioOptions.map((item, index)=>(
                <li key={index}><button value={item.toLowerCase()} onClick={handleClick}>{item}</button></li>
            ))}
        </ul>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
           {card.map((item, index)=>(
            <div key={index} className="relative">
              <img src={item.img} alt={item.nom}/>
              <div className="absolute top-0 w-full bg-blue-600 h-full flex flex-col gap-2 justify-center items-center text-white opacity-0 hover:opacity-60 duration-150 ease-in transition-opacity cursor-pointer ">
                <Plus size={18}/>
                <p>{item.nom}</p>
              </div>
            </div>
           ))}
        </div>
    </div>
    </div> 
    
  )
}

export default Portfolio