import React, { useState } from "react";
import { toast } from "sonner";

const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(!name || !email || !message){
            toast.error('Veiller remplir tous les champs')
            return;
        }
        toast.success("Message envoye avec succes")
        setName('')
        setEmail('')
        setMessage('')
    }
  return (
    
    <form action="#" className="space-y-5 my-5" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        className="rounded-full p-4 bg-white w-full md:w-[48%] outline-0 md:mr-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        className="rounded-full p-4 bg-white w-full md:w-[48%] outline-0 md:ml-2"
      />
      <textarea
        name="message"
        id="message"
        placeholder="Message"
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
        className="bg-white p-8 w-full md:h-80 h-40 rounded-2xl outline-0 "
      ></textarea>
      <input
        type="submit"
        value="Send Message"
        className="w-full bg-slate-900 text-white p-3 inline-flex justify-center items-center rounded-full "
      />
    </form>
  );
};

export default FormContact;
