import { ArrowRight } from "lucide-react"
import { Link, Outlet } from "react-router-dom"
import LoginBg from "../components/logIn_bg/loginBg"


const AuthLayout = () => {
  return (
    <div className="flex justify-center w-full items-center bg-gray-500 h-screen">
      <div className="flex px-4 py-2 gap-8 bg-black/60 w-full md:w-[90%] md:h-[90%] md:rounded-2xl h-full rounded-none">
        <div className="hidden md:block md:w-1/2 p-4">
          <LoginBg />
        </div>
        <div className="flex flex-col justify-center text-start items-center py-5 px-2 md:w-1/2 text-white leading-loose w-full">
          
          <Outlet />
        </div>
      </div>
      <div className="flex gap-2 items-center md:hidden justify-center bg-white/60 py-1 px-2 rounded-full text-xs absolute top-5 right-2">
        <Link to="/">Back to website </Link>
        <span>
          <ArrowRight size={12} />
        </span>
      </div>
    </div>
  )
}

export default AuthLayout