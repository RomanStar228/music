import logo from '../public/logo.svg';
import Image from 'next/image';

export const Logo = () =>{
    return(
        <div>
            <Image src={logo} alt='logo'/>
        </div>
    )
}

export const Title = ({children}) =>{
    return <span className='font-bold font-[Inter]'>{children}</span>
}

export const Artist = ({children}) =>{
    return <span className='font-[Inter]'>{children}</span>
}

export const Duration = ({children}) =>{
    return <span className='font-[Inter]'>{children}</span>
}

export const Cover = ({src}) =>{
    return(
        <Image src={src} alt='cover' height={47} width={47} className='h-[47px] w-[47px] rounded-md'/>
    )
}