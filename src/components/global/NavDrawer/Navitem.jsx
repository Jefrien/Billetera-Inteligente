import {ListItem, ListItemPrefix} from "@material-tailwind/react";
import React from "react";
import Link from "next/link";
import {useDrawerStore} from "../../../store/drawer";
import {usePathname} from "next/navigation";

export default function NavItem({text, icon, href}) {

    const { closeDrawer } = useDrawerStore()
    const pathname = usePathname()

    return (
        <>
            {href ? (
                <Link  href={href} onClick={closeDrawer}>
                    <ListItem
                        className={
                        "font-semibold hover:bg-blue-gray-50 mt-auto dark:hover:bg-white/10 dark:text-white focus:bg-blue-gray-50 dark:active:bg-blue-gray-900 focus:bg-bg-blue-gray-900"
                            + (pathname === href ? " !bg-blue-600 text-white !dark:bg-white/10" : "")
                    }>
                        {icon && <ListItemPrefix>{icon}</ListItemPrefix>}
                        {text}
                    </ListItem>
                </Link>
            ) : (
                <div
                    className="font-bold mt-4 uppercase text-sm opacity-70 ml-4 dark:text-big-stone-300 focus:bg-blue-gray-900">
                    {icon && <ListItemPrefix>{icon}</ListItemPrefix>}
                    {text}
                </div>
            )
            }
        </>
    )
}
