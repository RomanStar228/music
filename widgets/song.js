'use client'

import Image from "next/image/";
import pic from "../public/music.png";
import heart from "../public/heart.svg";
import {Title} from "../shared/ui";
import {Artist} from "../shared/ui";
import {Duration} from "../shared/ui";
import { Cover } from "../shared/ui";
import secondsToMMSS from "@/app/utils/secondsToMMSS";
import { AudioContext } from "@/app/context/audioContext";
import { useContext } from "react";


export const Song = (track) => {
  const {id, src, preview, title, artist, duration} = track;

  const formatedDuretion = secondsToMMSS(duration);

  const { currentTrack, isPlaying, handleToggleAudio} = useContext(AudioContext);

  const isCurrentTrack = currentTrack.id === id;

  return (
    <div className="bg-[#F1F1F1] rounded-[10px] flex justify-between items-center 
    py-2.5 px-4 w-full" onClick={()=>handleToggleAudio(track)}>
        <div className="flex gap-3">
            <div>
            <Cover src={preview}/>
            </div>
            <div className="flex flex-col">
            <div>
                <Title children={title} />
            </div>
            <div>
                <Artist children={artist} />
            </div>
            </div>
        </div>
        <div className="flex items-center gap-3"> 
            <Image src={heart} alt="like"/> 
            <Duration children={formatedDuretion}/>
         </div>
    </div>
  );
};