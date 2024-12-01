'use client';
import {
    IconButton,
    Navbar,
} from "../../material";
import MenuIcon from '../../../../public/icons/menu.svg';
//import useDrawerStore from "../../../store/drawer";

export default function NavBar() {
    //const { toggleDrawer } = useDrawerStore()
    const toggleDrawer = () => {
        console.log('toggle')
    }

    return (
        <Navbar fullWidth={true} className="w-full px-4 py-2 lg:py-4  rounded-0 dark:bg-big-stone-900 border-0 flex">
            <div className='h-10 w-0'></div>
            <IconButton
                onClick={toggleDrawer}
                variant='text' className='text-black dark:text-white lg:hidden' size={'lg'}>
                <MenuIcon className='w-8 h-8' />
            </IconButton>
        </Navbar>
    )
}
