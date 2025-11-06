import { Logo } from "../shared/ui";

export const Footer =() =>{
    return(
        <div className="bg-[#1D1D1D] flex flex-col items-center justify-center py-10">
            <Logo />
            <p className="font-[Inter] font-normal text-white 
            text-[20px] pt-6">2025 MUSIC. all rignts zachichini</p>
        </div>
    )
}