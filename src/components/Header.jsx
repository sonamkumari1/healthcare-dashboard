import React from "react";
import { FaThermometerHalf } from "react-icons/fa";
import { GiHealthCapsule } from "react-icons/gi";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Header() {
  return (
    <div className="flex flex-col items-center">
      <header className="bg-teal-800 w-full p-2 text-white flex justify-between">
        <div className="flex items-center w-full justify-between flex-wrap">
          <div className="mr-2">
            <img
              src="https://www.mindtrot.com/_next/static/media/logo3.2e3e7847.png"
              alt=""
              className="w-12 h-auto"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="text-md flex items-center">
              Morning, Omkar Patil <TiWeatherPartlySunny className="ml-2 text-cyan-600" />
            </div>
            <div className="mt-1 flex">
              <span className="mr-2 inline-flex items-center">
                <FaThermometerHalf className="mr-1" />
                252bpm
              </span>
              <span className="mr-5 inline-flex items-center">
                <GiHealthCapsule className="mr-1" />
                Healthy
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-custom-teal text-gray-800 text-xl shadow-md">
            🔔
          </div>
          <div className="my-3 ml-5">
            <input
              type="text"
              placeholder="Search..."
              className="w-80 sm:w-64 md:w-96 p-2 rounded-full border border-gray-300"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
