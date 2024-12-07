'use client'
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    ThemedButton,
} from "../../../../components/material";
import TrashIcon from "../../../../../public/icons/trash.svg";
import React from "react";
import {deleteCategory} from "../actions";
import LoaderIcon from "../../../../../public/icons/loader.svg";

export default function DeleteButtonPopover({ item }) {

    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleDelete = async () => {
        setLoading(true)
        await deleteCategory(item.id)
        setOpen(false)
        setLoading(false)
    }

    return (
        <Popover open={open} handler={setOpen}>
            <PopoverHandler>
                <ThemedButton colors={{
                    light: 'red',
                    dark: 'red'
                }} variant="text" size='sm' className='h-8 w-8 inline-flex items-center justify-center p-0' onClick={() => setOpen(true)}>
                    <TrashIcon className='w-5 h-5' />
                </ThemedButton>
            </PopoverHandler>
            <PopoverContent className='dark:bg-big-stone-900 dark:border-l-big-stone-700 dark:border-r-big-stone-700 dark:border-2 dark:border-y-big-stone-700 dark: dark:shadow-big-stone-900'>
                <div className={'mb-3 text-center dark:text-big-stone-300'}>
                    Seguro que desea eliminar esta categoria: <strong>{item.title}</strong>?
                </div>

               <div className='flex gap-2 justify-center'>
                   <ThemedButton size='sm' variant={'text'} onClick={() => setOpen(false)}>
                       Cancelar
                   </ThemedButton>

                   <ThemedButton colors={{
                       light: 'red',
                       dark: 'red'
                   }} size = 'sm' variant = 'text' onClick={handleDelete}>
                       Eliminar
                   </ThemedButton>
               </div>

                {loading && (
                    <div
                        className='absolute left-0 top-0 z-10 backdrop-blur bg-black/50 w-full h-full flex items-center justify-center'>
                        <LoaderIcon className='animate-spin h-10 w-10 text-white'/>
                    </div>
                )}

            </PopoverContent>
        </Popover>
    );
}