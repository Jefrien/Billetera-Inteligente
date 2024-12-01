'use client'
import LoaderIcon from '../../../../public/icons/loader.svg';
import {useLoaderStore} from "../../../store/loader";

export default function Loader() {
    const { show } = useLoaderStore()

    return (
        <div className={'fixed z-20 flex-col text-center top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-xl flex items-center justify-center transition-opacity'
        + (show ? '' : ' opacity-0 pointer-events-none')
        }>
            <LoaderIcon className='w-16 h-16 animate-spin text-white'/>
            <p className="text-center text-white text-2xl mt-4">Cargando...</p>
        </div>
    )
}
