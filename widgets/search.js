export const Search = ({func}) =>{
    return(
        <div className="flex justify-center items-center my-6 w-full">
            <input placeholder="search" className="bg-white py-3.5 px-5 
            border-none rounded-xl text-[20px] w-full" onChange={func} />
        </div>
    )
}
