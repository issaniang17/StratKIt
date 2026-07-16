import { ChevronLeft, ChevronRight } from "lucide-react"
import { Testimonial } from "../constantes/Constante"
import { useState } from "react"


const Testimonials = () => {
    const listMd1 = Testimonial.slice(0, 2)
    const listMd2 = Testimonial.slice(1, 3)
    const [presentList1,setPresentList1] = useState(false)
    const [indexList, setIndexList] = useState(0)
    const [mdList, setMdList] = useState(listMd1)
    const nextCard = ()=>{
        setIndexList(indexList + 1)
        setPresentList1(!presentList1)
        if(presentList1){
            setMdList(listMd1)
            
        }else{
             setMdList(listMd2)
             
        }
        if(indexList === Testimonial.length - 1){
            setIndexList(0)
        }
    }

    const prevCard = ()=>{
        setIndexList(indexList - 1)
        setPresentList1(!presentList1)
        if(presentList1){
            setMdList(listMd1)
            
        }else{
             setMdList(listMd2)
             
        }
        if(indexList === 0){
            setIndexList(Testimonial.length - 1)
        }
    }
  return (
    <div className="my-10 flex gap-4 px-4 sm:px-10 overflow-x-auto relative  scroll-smooth snap-x snap-mandatory scrollbar-none  mx-10 text-justify duration-150 ease-in transition-all">
        <ChevronLeft size={25} className="text-black absolute top-[50%] left-0 cursor-pointer" onClick={prevCard}/>
        {mdList.map((item, index)=>(
            <div key={index} className="hidden md:block md:w-1/2  shrink-0 snap-center  mt-5 p-2">
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
        <div className="flex flex-col gap-3 items-center w-full justify-between md:hidden   shrink-0 snap-center  mt-5 p-2 duration-150 ease-in transition-all">
            <p className="opacity-50 font-normal">{Testimonial[indexList].description}</p>
                <div className="flex gap-2 mt-8 items-center">
                    <img src={Testimonial[indexList].photo}alt={Testimonial[indexList].nom} className="rounded-full size-20"/>
                    <div>
                        <h2 className="font-bold">{Testimonial[indexList].nom}</h2>
                        <h3 className="opacity-50">{Testimonial[indexList].poste}</h3>
                    </div>
                </div>
        </div>
        <ChevronRight size={25} className="text-black absolute top-[50%] right-0 cursor-pointer" onClick={nextCard}/>
    </div>
  )
}

export default Testimonials