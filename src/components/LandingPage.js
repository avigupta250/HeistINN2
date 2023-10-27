import React from "react";
import Burger from "../assets/Burger.png.png";
import Biryani from "../assets/Biryani.png.png";
import Thali from "../assets/Thali.png";
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen  relative flex m-[50px] mt-[100px] justify-center">
      <div className="  flex fixed flex-col md:flex-row justify-between">
        {/* Left Part */}
        <div className="m-7 flex flex-col w-full md:w-1/2">
          <h1 className="sm:text-3xl md:text-5xl 2xl:text-7xl font-bold text-orange-600">
            Heist <span className="text-black">INN</span>
          </h1>
          <h1 className="sm:text-3xl md:text-5xl 2xl:text-7xl font-bold">
            <span className="text-black text-7xl font-bold">
              The <span className="text-orange-600">Art</span> Of Satisfying Cravings
            </span>
          </h1>
          <div className="text-2xl m-3 font-italic font-bold flex flex-col gap-3">
            <p>Discover a wide range of cuisines and restaurants in your area</p>
            <p>Ordering your favorite meals is just a few clicks away</p>
            <p>Enjoy fast and reliable delivery to your doorstep</p>
            <p>Ready to satisfy your cravings?</p>
          </div>
          <Link to="/home">
            <button className="bg-orange-600 w-72 h-16 p-2 font-bold text-white text-3xl mt-5">
              Let's Heist
            </button>
          </Link>
        </div>
        {/* Right part */}
        <div className="flex ">
          <div className="flex flex-col mt-1 items-center">
            <img className=" w-[300px] h-[300px] " src={Biryani} alt="Biryani" />
            <img className="mt-6 w-[300px] h-[300px] " src={Thali} alt="Thali" />
          </div>
          <img className= "sm:w-[100px] sm:h-[200px] xl:w-[300px] xl:h-[630px]" src={Burger} alt="Burger" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

