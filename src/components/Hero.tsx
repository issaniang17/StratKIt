import { useEffect, useState } from 'react'
import hero from '../assets/hero.png'
import { MoveUpIcon } from 'lucide-react'
import { animateScroll } from 'react-scroll'

const Hero = () => {
    const [arrowPos, setArrowPos] = useState(false)
        useEffect(()=>{
            const handleScroll =()=>{
                if(window.scrollY > 20){
                    setArrowPos(true)
                }else{setArrowPos(false)}
            }
            window.addEventListener('scroll', handleScroll)
            return () => {window.removeEventListener('scroll', handleScroll)}
       
        }, [])
    
  return (
    <div className='h-screen bg-cover bg-fixed bg-neutral-600 bg-blend-multiply' style={{ backgroundImage: `url(${hero})`}}>
        <div className='w-full flex justify-center items-center h-screen'>
            <div className='lg:mt-20'>
                <h1 className='text-white font-bold text-5xl sm:text-7xl text-center leading-relaxed'>
                    <span className='bg-linear-to-r from-blue-600 to-blue-400 opacity-80 text-transparent bg-clip-text'>Creative </span>
                    & Innovative <br />Digital Agency
                </h1>
            </div>
        </div>
        {arrowPos && (
            <div className='bg-blue-600 fixed bottom-10 right-8 text-white flex justify-center items-center  w-15 h-15 duration-300 ease-in transition-all cursor-pointer z-100' onClick={animateScroll.scrollToTop}>
                <MoveUpIcon />
            </div>
        )}
    </div>
  )
}

export default Hero