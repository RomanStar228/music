'use client'

import { Logo } from "../../shared/ui";
import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";
import { Search } from "../../widgets/search";
import { Song } from "../../widgets/song";
import { CurrentSong } from "../../widgets/currentSong";
import { useState } from "react";
import tracksList from "./assets/tracksList";
import { SongList } from "../../widgets/songList";

const runSearch = (query) =>{
  if (!query){
    return tracksList;
  }

  const lowerCaseQuery = query.toLowerCase();

  return tracksList.filter((track) =>
  track.title.toLowerCase().includes(lowerCaseQuery) ||
  track.artists.toLocaleLowerCase().includes(lowerCaseQuery))
}




export default function Home() {
  const [tracks, setTracks] = useState(tracksList);

  const handleChange = (event) => {
    const foundTracks = runSearch(event.target.value);
    setTracks(foundTracks);
  }

  return (
    <div className="bg-[#B4B4B4] flex-1">
      <Header />
        <div className="flex flex-col justify-center 
        items-center mx-60">
           <Search func={handleChange}/>
           <SongList songs={tracks}/>
           <CurrentSong />
        </div>
      <Footer/>
    </div>
  );
}
