'use client'
import {ThemedButton} from "../../../../components/material";
import React, {useEffect} from "react";
import {useNewCategoryStore} from "../../../../store/categories";

export default function NewButton({ categories }) {
    const { openDrawer, openDefaultCategories } = useNewCategoryStore()

    useEffect(() => {
        if(categories.length === 0) {
            openDefaultCategories()
        }
    }, []);

    return (
        <ThemedButton colors={{
            light: 'black',
            dark: 'white'
        }} variant="text" className='inline-flex items-center gap-2' size='sm' onClick={openDrawer} >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nueva Categoria
        </ThemedButton>
    )
}