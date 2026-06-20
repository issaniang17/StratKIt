import { results } from "../constantes/Constante"


const Results = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 px-4 lg:px-10">
        {results.map((item, index)=>(
            <div key={index} className="rounded-lg shadow-lg p-8 text-center flex flex-col justify-center items-center ">
                <h2 className="font-bold text-green-400 text-4xl mb-2">{item.chiffre}</h2>
                <h3 className="font-bold text-2xl">{item.title}</h3>
            </div>
        ))}
        
    </div>
  )
}

export default Results