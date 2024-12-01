import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import UserIcon from "../../../../public/icons/account.svg";
import LogoutIcon from "../../../../public/icons/logout.svg";
import {IconButton} from "../../material";
import {logout} from '../../../app/auth/actions'

export default function NavUserMenu() {
    return (
        <Menu >
            <MenuHandler>
                <IconButton variant='text' className='dark:text-white rounded-full' data-ripple-light="false">
                    <UserIcon />
                </IconButton>
            </MenuHandler>
            <MenuList className='bg-white dark:bg-big-stone-800 dark:border-big-stone-700 dark:shadow-blue-gray-900 p-1'>
                <MenuItem onClick={logout} className='flex items-center gap-2 dark:text-white dark:focus:bg-big-stone-600'>
                    <LogoutIcon className='w-5 h-5' />
                    Cerrar sesion
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
