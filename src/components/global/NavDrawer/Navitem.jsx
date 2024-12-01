import {ListItem, ListItemPrefix} from "@material-tailwind/react";
import React from "react";
import Link from "next/link";

export default function NavItem({text, icon, href}) {
    return (
        <>
            {href ? (
                <Link href={href}>
                    <ListItem
                        className="font-bold hover:bg-blue-gray-50 mt-auto dark:hover:bg-white/10 dark:text-white focus:bg-blue-gray-50 dark:focus:bg-bg-blue-gray-900">
                        {icon && <ListItemPrefix>{icon}</ListItemPrefix>}
                        {text}
                    </ListItem>
                </Link>
            ) : (
                <div
                    className="font-bold mt-4 uppercase text-sm text-big-stone-500 ml-4 dark:text-big-stone-300 focus:bg-blue-gray-900">
                    {icon && <ListItemPrefix>{icon}</ListItemPrefix>}
                    {text}
                </div>
            )
            }
        </>
    )
}
