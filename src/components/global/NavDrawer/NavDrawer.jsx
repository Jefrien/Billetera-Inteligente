"use client";
import React from "react";
import {
    Card,
    Typography,
    List
} from "@material-tailwind/react";
import NavItem from "./Navitem";
import DashboardIcon from '../../../../public/icons/dashboard.svg'
import BillsIcon from '../../../../public/icons/bills.svg'
import IncomeIcon from '../../../../public/icons/income.svg'
import CategoryIcon from '../../../../public/icons/category.svg'
import {useDrawer} from "../../../utils/useDrawer";

export default function NavDrawer() {
    const { closeDrawer, isOpen } = useDrawer()

    const menuItems = [
        {
            text: 'Menu ',
            href: false,
        },
        {
            text: 'Panel de control',
            href: '/app',
            icon: <DashboardIcon />
        },
        {
            text: 'Gastos',
            href: '/app/gastos',
            icon: <BillsIcon />
        },
        {
            text: 'Ingresos',
            href: '/app/ingresos',
            icon: <IncomeIcon />
        },
        {
            text: 'Ajustes',
            href: false,
        },
        {
            text: 'Categorias',
            href: '/app/categorias',
            icon: <CategoryIcon />,
        },
    ]

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 lg:hidden z-40"
                    onClick={closeDrawer}
                />
            )}

            <Card
                className={`fixed top-0 left-0 h-screen bg-gray-50 dark:bg-big-stone-900 w-64 p-0 shadow-xl shadow-blue-gray-900/5 transform transition-transform duration-200 ease-in-out z-50 rounded-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
            >
                <div className="mb-2 p-4">
                    <Typography variant="h5" className='text-gray-900 text-justify  dark:text-white uppercase tracking-widest  '>
                        Billetera<br />Inteligente
                    </Typography>
                    {isOpen ? 'open' : 'close'}
                </div>
                <List>
                    { menuItems.map((item, index) => <NavItem key={index} icon={item.icon} text={item.text} href={item.href} />) }
                </List>
            </Card>
        </>
    );

}
