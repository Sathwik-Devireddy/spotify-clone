import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
        <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img
              onClick={() => navigate("/")}
              className="w-6"
              src={assets.home_icon}
              alt=""
            />
            <p
              onClick={() => navigate("/")}
              className="font-bold hover:text-green-700"
            >
              Home
            </p>
          </div>
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img className="w-6" src={assets.search_icon} alt="" />
            <p className="font-bold hover:text-green-700">Search</p>
          </div>
        </div>
        <div className="bg-[#121212] h-[85%] rounded">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="w-8" src={assets.stack_icon} alt="" />
              <p className="font-semibold hover:text-green-600 hover-bold">
                Your Library
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-5" src={assets.arrow_icon} />
              <img className="w-5" src={assets.plus_icon} />
            </div>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Create your First Playlist</h1>
            <p className="font-light">its easy to create </p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:bg-black hover:text-white">
              Create your playlist
            </button>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Lets find Some podcast's to follow</h1>
            <p className="font-light">
              we will keep you update on new episodes
            </p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:bg-black hover:text-white">
              Browse podcasts
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
