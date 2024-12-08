'use client'
import {
    Drawer,
    Typography,
    IconButton, Option,
} from "@material-tailwind/react";
import React, {useEffect, useState, useActionState} from "react";
import {ThemedButton, ThemedSelect, ThemedTextField} from "../../../../components/material";
import {useNewCategoryStore} from "../../../../store/categories";
import {createCategory, getCategories} from "../actions";
import LoaderIcon from "../../../../../public/icons/loader.svg";

export default function NewCategoryDrawer() {

    const {isNewCategoryOpen, closeDrawer} = useNewCategoryStore();
    const [categories, setCategories] = useState([])
    const [state, formAction, isPending] = useActionState(async (prevState, formData) => {
        try {
        const results = await createCategory(prevState, formData);
        if (results.success === true) {
            closeDrawer()
        } else {
            throw new Error(results.message)
        }

        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }, null);


    useEffect(() => {
        getCategories().then((response) => {
            let cats = response

            // add to first position
            cats.unshift({id: 0, title: '--'})

            setCategories(cats)
        })
    }, []);



    return (
        <React.Fragment>
            <Drawer
                overlayProps={{
                    className: 'fixed'
                }}
                placement={'right'} open={isNewCategoryOpen} onClose={closeDrawer} className="p-4 dark:bg-big-stone-900 text-white">
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" className='text-blue-gray-900 dark:text-blue-gray-100'>
                        Nueva Categoria
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

                <form action={formAction}>
                    <ThemedTextField
                        label='Titulo'
                        name='title'
                    />

                    <div className="mt-4">
                        <ThemedSelect label='Categoría Padre' name='category'>
                            {categories.map((category) => (
                                <Option key={category.id}>{category.title}</Option>
                            ))}
                        </ThemedSelect>
                    </div>

                    <p aria-live="polite" className="p-2 text-red-400" role="status">
                        {state?.message}
                    </p>

                    <ThemedButton
                        colors={{
                            light: 'blue',
                            dark: 'blue'
                        }}
                        className='w-full mt-4'
                        type='submit'
                    >
                        Guardar
                    </ThemedButton>
                </form>

                {isPending && (
                    <div
                        className='absolute left-0 top-0 z-10 backdrop-blur bg-black/50 w-full h-full flex items-center justify-center'>
                        <LoaderIcon className='animate-spin h-10 w-10 text-white'/>
                    </div>
                )}
            </Drawer>
        </React.Fragment>
    )
}
