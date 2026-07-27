import { useState } from "react";

const SubcribeForm = () => {
    
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
  return (
    <form
      action="#"
      className="w-full flex flex-col my-4 items-center justify-center md:flex-row gap-4 md:gap-6"
    >
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        className="p-4 bg-white rounded-full outline-0 md:w-[50%] w-full"
        placeholder="Your email address"
      />
      <button
        type="submit"
        
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
        className="inline-flex justify-center items-center p-4 rounded-full text-white bg-slate-900 w-full md:w-[15%]"
      >Subscribe</button>
    </form>
  );
};

export default SubcribeForm;
