import { Link, NavLink } from "react-router-dom"
import { navAuth } from "../../constantes/Constante"

type dark = {
    darkMode: boolean
}
const Sidebar = ({darkMode}:dark) => {
    
  return (
    <div className={`flex flex-col gap-3  h-screen md:h-full transition-all duration-300 ease-in-out ${darkMode && 'darkModeNav'}`}>
        <div className="mt-4 mb-8 flex md:justify-center">
          <Link to="/" className={`font-bold text-4xl text-black ${darkMode && 'text-white'}`}>
            StratKit
          </Link>
        </div>
        <div className="space-y-10  leading-loose ">
          <div className="flex flex-col gap-4 px-4 justify-center mb-5 border-b py-4">
            {navAuth.slice(0, 4).map((link, index) => (
              <NavLink
                to={link.url}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-100 p-2 rounded-2xl transition duration-150 ease-in"
                    : "hover:text-green-500 duration-100 ease-in"
                }
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                {link.icon} {link.title}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col gap-4 px-4  justify-center">
            {navAuth.slice(4).map((link, index) => (
              <NavLink
                to={link.url}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-200 p-2 rounded-lg transition duration-150 ease-in"
                    : "hover:text-green-500 duration-100 ease-in"
                }
                style={{ display: "flex", gap: "20px" }}
              >
                {link.icon} {link.title}
              </NavLink>
            ))}
          </div>
        </div>
        
      </div>
  )
}

export default Sidebar