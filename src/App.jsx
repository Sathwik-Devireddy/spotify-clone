import React, { useContext, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import Player from "./components/Player";
import { PlayerContext } from "./context/PlayerContext";

function App() {
  const { audioRef, track, playStatus } = useContext(PlayerContext);

  // Optional: auto-play/pause when playStatus changes
  useEffect(() => {
    if (audioRef.current) {
      if (playStatus) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playStatus, audioRef]);

  return (
    <div className="h-screen bg-black flex flex-col">
      {/* Main content area */}
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>

      {/* Player controls */}
      <Player />

      {/* Hidden audio element */}
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}

export default App;
