'use client'
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import React from "react";
import {useDrawerStore} from "../../../store/drawer";
import {useNewIncomeStore} from "../../../store/incomes";
import {ThemedButton} from "../../../components/material";

export default function NewIncomeDrawer() {

    const {isNewIncomeOpen, closeDrawer} = useNewIncomeStore();


    return (
        <React.Fragment>
            <Drawer placement={'right'} open={isNewIncomeOpen} onClose={closeDrawer} className="p-4 dark:bg-big-stone-900 text-white">
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" className='text-blue-gray-900 dark:text-blue-gray-100'>
                        Nuevo Ingreso
                    </Typography>
                    <IconButton variant="text" className='text-blue-gray-900 dark:text-gray-100' onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <Typography className="mb-8 pr-4 font-normal text-gray-900 dark:text-gray-100">
                    Ingrese los datos del nuevo ingreso
                </Typography>
                <div className="flex gap-2">
                    <ThemedButton size="sm" variant="outlined" colors={{
                        light: 'blue',
                        dark: 'white'
                    }}>
                        Documentation
                    </ThemedButton>
                    <Button size="sm">Get Started</Button>
                </div>
            </Drawer>
        </React.Fragment>
    )
}
