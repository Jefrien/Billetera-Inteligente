import { ListItemPrefix } from "@material-tailwind/react";
import React from "react";
import { useDrawerStore } from "../../../store/drawer";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../../material";

export default function NavItem({ text, icon, href }) {
  const { closeDrawer } = useDrawerStore();
  const pathname = usePathname();
  const router = useRouter();

  const handleItemClick = () => {
    closeDrawer();
    router.push(href);
  };

  return (
    <>
      {href ? (
        <Button
          variant={"text"}
          onClick={handleItemClick}
          className={
            "capitalize text-sm font-normal hover:bg-blue-gray-50 mt-auto dark:hover:bg-white/10 dark:text-white  focus:bg-blue-gray-50 dark:active:bg-blue-gray-900 focus:bg-bg-blue-gray-900 flex items-center pl-3" +
            (pathname === href
              ? " !bg-blue-600 text-white !dark:bg-white/10 !focus:text-white  dark:focus:text-white !active:text-white  dark:active:text-white"
              : "")
          }
        >
          {icon && <ListItemPrefix>{icon}</ListItemPrefix>}
          {text}
        </Button>
      ) : (
        <div className="font-bold mt-4 uppercase text-sm opacity-70 ml-4 dark:text-big-stone-300 focus:bg-blue-gray-900">
          {icon && <ListItemPrefix>{icon}</ListItemPrefix>}
          {text}
        </div>
      )}
    </>
  );
}
