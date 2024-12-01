'use client';
import {
    IconButton,
    Navbar,
} from "../../material";
import MenuIcon from '../../../../public/icons/menu.svg';
import {useDrawer} from "../../../utils/useDrawer";

export default function NavBar() {
    const { toggleDrawer } = useDrawer()

    return (
        <Navbar fullWidth={true} className="mx-auto max-w-screen-xl px-4 py-2 lg:py-4  rounded-0 dark:bg-big-stone-900 border-0">
            <IconButton
                onClick={toggleDrawer}
                variant='text' className='text-black dark:text-white' size={'lg'}>
                <MenuIcon className='w-8 h-8' />
            </IconButton>
        </Navbar>
    )
}
