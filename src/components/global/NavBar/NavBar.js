'use client';
import {
    IconButton,
    Navbar,
} from "../../material";
import MenuIcon from '../../../../public/icons/menu.svg';
import UserIcon from '../../../../public/icons/account.svg';
import {useDrawerStore} from "../../../store/drawer";
import ThemeToggler from "../../global/ThemeToggler";
import NavUserMenu from "./NavUserMenu";

export default function NavBar() {
    const { toggleDrawer } = useDrawerStore()

    return (
        <Navbar fullWidth={true} className="w-full px-4 h-20 items-center justify-between rounded-0 dark:bg-big-stone-900 border-0 flex">
            <div>
                <IconButton
                    onClick={toggleDrawer}
                    variant='text' className='text-black dark:text-white lg:hidden' size={'lg'}>
                    <MenuIcon className='w-8 h-8'/>
                </IconButton>
            </div>

            <div className='flex gap-2 items-center h-full'>
                <ThemeToggler/>

                <NavUserMenu />

            </div>
        </Navbar>
    )
}
