import { createContext, useContext, useState } from "react";
import tracksList from "../assets/tracksList";

const defaultTrack =tracksList[0];
const audio = new Audio(defaultTrack.src);

export const AudioContext = createContext({});

const AudioProvider = ({children}) =>{
    const[currentTrack, setCurrentTrack] =  useState(defaultTrack);
    const [isPlaying, setIsPlaying] = useState(false);

    const handdleToggleAudio = (track) =>{
        if (currentTrack.id != track.id){
            setCurrentTrack(track);
            setIsPlaying(true);

            audio.src = track.src;
            audio.currentTime = 0;
            audio.play();
            
            return;
        }
        else{
           if(isPlaying){
              audio.pause();
              setIsPlaying(false);
           }
          else{
              audio.play();
              setIsPlaying(true); 
          }
        };
        const value = {audio, currentTrack, isPlaying, handdleToggleAudio};
        return(
            <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
        )
     
    }
}

export default AudioProvider;
