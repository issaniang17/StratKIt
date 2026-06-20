import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks } from "../constantes/Constante"
import logo from '../assets/head/logo.png'

import {animateScroll, Link} from 'react-scroll'


function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const openMenu = ()=>{
        setMobileMenu(true)
    }
    const closeMenu = ()=>{
        setMobileMenu(false)
    }
    const [pos, setPos] = useState(false)
    useEffect(()=>{
        const handleScroll =()=>{
            if(window.scrollY > 20){
                setPos(true)
            }else{setPos(false)}
        }
        window.addEventListener('scroll', handleScroll)
        return () => {window.removeEventListener('scroll', handleScroll)}
   
    }, [])
  return (
    <nav className={`px-8 py-6 flex justify-between w-full  text-white  fixed top-0 z-50 mb-10 items-center  ${pos ?  'bg-slate-900' : "bg-transparent"} `} >
        <div>
            <Link onClick={animateScroll.scrollToTop} to="/" spy={true} smooth={true} duration={500}>
               <img src={logo} alt="logo" className="shrink-0 cursor-pointer"/>
            </Link>
        </div>
        <div>
             <ul className="gap-8 hidden lg:flex font-normal">
                        {navLinks.map((link, index)=>(
                            <li key={index} className="hover:text-green-400 transition-colors duration-300 ease-in cursor-pointer"><Link to={link} spy={true} smooth={true} duration={500} offset={-180}>{link}</Link></li>
                        ))}
                </ul>
            <Menu onClick={openMenu} className="lg:hidden"/>
        </div>
        {mobileMenu && (
           <div className="absolute top-0 left-0 w-[40%] h-screen z-100 bg-slate-900 flex flex-col items-start">
             <X onClick={closeMenu} className="absolute top-5 right-2 text-lg "/>
                <div>
                    <ul className="flex flex-col gap-5 mt-20 ml-5">
                        {navLinks.map((link, index)=>(
                            <li key={index} className="hover:text-green-400 transition-colors duration-300 ease-in">
                                <Link to={link} spy={true} smooth={true} duration={500} offset={-180}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
           </div>
        )}
    </nav>
  )
}

export default Navbar