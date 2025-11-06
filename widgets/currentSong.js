import { Cover } from "../shared/ui"
import { Artist } from "../shared/ui"
import { Title } from "../shared/ui"
import pic from "../public/music.png"
import Image from "next/image"
import heart from "../public/heart.svg"
import sound from "../public/sound.svg"
import play from '../public/play.svg';
import prev from '../public/prev.svg';
import next from '../public/next.svg';

export const CurrentSong = () =>{
    return(
        <div className="flex px-5 py-3.5 bg-[#FFFFFF] w-full rounded-[13px] justify-between items-center mb-[33px]">
            <div className="flex gap-5 flex-1">
                <Cover src={pic}/> 
                <div className="flex flex-col">
                    <Title children="I am music"/>
                    <Artist children="PlayBoi Carti" />
                </div>
            </div>
            
            <div className="flex gap-3 justify-center items-center flex-1">
                <Image src={prev} alt="prev"/>
                <Image src={play} alt="play"/>
                <Image src={next} alt="next"/>
            </div>
            
            <div className="flex gap-3 justify-end flex-1">
                <Image src={heart} alt="like" />
                <Image src={sound} alt="sound" />
            </div>
        </div>
    )
}