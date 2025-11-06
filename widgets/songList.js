'use client'

import { Song } from "./song"
import tracksList from "../src/app/assets/tracksList"
import { useState } from "react"


export const SongList = ({songs}) =>{

    return(
        <div className="flex w-full bg-white flex-col px-3 py-4 gap-2.5 rounded-2xl mb-[33px]">
            {songs.map((track) =>
                (<Song key={track.id}    {...track} />)
            )}
        </div>
    )
}