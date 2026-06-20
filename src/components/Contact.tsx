import { ContactElement } from "../constantes/Constante"


const Contact = () => {
  return (
    <div className="flex flex-col items-center text-sm sm:grid sm:grid-cols-[500px_1fr] sm:gap-3 text-white space-y-2 mt-10 sm:mt-2 px-2">
        <div className="sm:space-y-4 sm:pl-5">
            {ContactElement.localisation}
            {ContactElement.telephone1}
            {ContactElement.telephone2}
            {ContactElement.temps}
            <div className="flex justify-center items-center gap-3 mt-2 sm:justify-start">
                {<ContactElement.reseaux.facebook/>}
                {<ContactElement.reseaux.twitter/>}
                {<ContactElement.reseaux.insta/>}
                {<ContactElement.reseaux.youtube/>}
            </div>
        </div>
        <div className="text-white mt-5 px-4 sm:px-1">
            <form action="/" className="space-y-4 sm:space-x-1" onSubmit={(e)=> e.preventDefault()}>
                <input type="text" placeholder="Name" className="bg-white text-black p-2 rounded-lg w-full sm:w-[45%]" id="nom"/>
                <input type="text" placeholder="Last Name" id="prenom" className="bg-white text-black p-2 rounded-lg w-full sm:w-[45%]"/>
                <input type="number" placeholder="Phone" id="phone" className="bg-white text-black p-2 rounded-lg w-full sm:w-[45%]"/>
                <input type="email" placeholder="Email" id="number" className="bg-white text-black p-2 rounded-lg w-full sm:w-[45%]"/>
                <textarea name="message" id="mesaage" placeholder="Message" className="bg-white text-black p-4 rounded-lg w-full"></textarea>
                <input type="submit" value="Submit Meassage" className="bg-blue-500 p-2 rounded-lg inline-flex items-center justify-center"/>
            </form>
        </div>
    </div>
  )
}

export default Contact