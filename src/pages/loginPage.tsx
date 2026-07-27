import { Link } from "react-router-dom";
import LogInForm from "../components/forms/loginFom";
import LoginBg from "../components/logIn_bg/loginBg";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center bg-gray-500 md:h-screen absolute w-full z-3000">
      <div className="flex px-4 py-2 gap-8 bg-black/60 w-full md:w-[90%] md:h-[90%] md:rounded-2xl h-full rounded-none">
        <div className="hidden md:block md:w-1/2 p-4">
          <LoginBg />
        </div>
        <div className="flex flex-col justify-center text-start items-center py-5 px-2 md:w-1/2 text-white leading-loose w-full">
          <div className="  md:text-start text-center w-full space-y-2">
            <h2 className="font-semibold text-2xl md:text-4xl ">
              Log in your space
            </h2>
            <p className="font-light text-sm opacity-70">
              No account?{" "}
              <Link to="/Sign up" className="underline text-blue-500">
                Subscribe
              </Link>
            </p>
          </div>
          <LogInForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
