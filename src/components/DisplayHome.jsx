import React from "react";
import NavBar from "./NavBar";
import { albumsData } from "../assets/assets";
import { songsData } from "../assets/assets";
import Albumitem from "./Albumitem";
import SongItem from "./SongItem";
function DisplayHome() {
  return (
    <>
      <NavBar />
      <div className="mb-4">
        <h1>Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <Albumitem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1>Todays BIggest HIts</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
