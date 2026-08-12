import { Outlet } from "react-router-dom";
import {storedAccountValue } from "../constantes/Constante";
import { useState } from "react";
import { Menu, Moon, Sun, User, X } from "lucide-react";
import { toast } from "sonner";
import Sidebar from "../components/authAccount/sidebar";

const DashboardLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleBtn = () => {
    setDarkMode(!darkMode);
  };
  const [mobileView, setMobileView] = useState(false)
  if(!storedAccountValue){
    toast.error('No account')
    return
  }
  const {formSignIn} = JSON.parse(storedAccountValue)
  const toggleMenu = () =>{
    setMobileView(!mobileView)
  }
  return (
    <div className="grid md:grid-cols-[200px_1fr]">
      {/* Mobile menu */}
      <div className="flex flex-col gap-5 md:hidden relative" onClick={toggleMenu}>
        {mobileView ? <div>
        <X size={30}  onClick={toggleMenu} className={`absolute right-2 top-5 ${darkMode && 'text-white'}`}/>
        <Sidebar darkMode={darkMode}/>
      </div> : <Menu onClick={toggleMenu} className={`absolute left-2 top-4 ${darkMode && 'text-white'}`}/>}
      </div>
      {/* desktop view */}
      <div className="hidden md:block" onClick={toggleMenu}>
        <Sidebar darkMode={darkMode}/>
      </div>
      <div className={`bg-gray-300 transition duration-200 ease-in ${darkMode && 'darkModeContent'}`}>
        <div className="mt-5 flex gap-4 justify-end">
         <div className="flex gap-2 items-center">
           <Sun size={16}/>
          <div
            className={`w-8 bg-black h-3 rounded-full flex  items-center px-1 cursor-pointer ${darkMode && 'bg-white'}`}
            onClick={toggleBtn}
          >
            <div
              className={`h-2  w-2 rounded-full transition-all duration-300 ease-in  ${darkMode ? "translate-x-[200%] bg-black" : "translate-x-0 bg-white"}`}
            ></div>
          </div>
          <Moon size={16} />
         </div>
         <div className="flex gap-1">
          <div className="border rounded-full mx-3">
            <User/>
          </div>
          <div className="capitalize opacity-80 mx-2">
            {formSignIn.firstname}{" "} {formSignIn.lastname}
          </div>
         </div>
        </div>
        
        <div className="my-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
