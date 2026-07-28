import { useEffect, useState } from "react";
import montagneVu1 from "../../assets/loginBg/montagne1.png";
import montagneVu2 from "../../assets/loginBg/montagne2.png";
import montagneVu3 from "../../assets/loginBg/montagne3.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const LoginBg = () => {
  const listBg = [montagneVu1, montagneVu2, montagneVu3];
  const [bgImg, setBgImg] = useState(0);

  const changeBgImg = () => {
    setBgImg(bgImg + 1);

    if (bgImg >= listBg.length - 1) {
      setBgImg(0);
    }
  };
  
  useEffect(() => {
    let compteur = 0
    const intervalId = setInterval(() => {
        compteur++

      setBgImg(prev => (prev + 1) % listBg.length);
      
      if(compteur === 5){
        clearInterval(intervalId)
      }
    }, 5000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [listBg.length]);

  return (
    <div
      className="text-white w-full h-full rounded-lg flex flex-col justify-between pb-5 bg-cover bg-center"
      style={{ backgroundImage: `url(${listBg[bgImg]})` }}
    >
      <div className="flex justify-between px-3 py-4">
        <h2 className="text-3xl font-semibold">StratKit</h2>
        <div className="flex gap-2 items-center justify-center bg-white/20 py-1 px-2 rounded-full text-xs">
          <Link to="/">Back to website </Link>
          <span>
            <ArrowRight size={12} />
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center leading-loose space-y-5">
        <p className="font-semibold text-2xl">
          Capturing Moments, <br /> Creating Memories
        </p>
        <div className="flex gap-4 mt-3">
          <span
            onClick={changeBgImg}
            className="w-15 h-2 bg-white rounded-full cursor-pointer"
          ></span>
          <span
            onClick={changeBgImg}
            className="w-15 h-2 bg-white rounded-full cursor-pointer"
          ></span>
          <span
            onClick={changeBgImg}
            className="w-15 h-2 bg-white rounded-full cursor-pointer"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default LoginBg;
