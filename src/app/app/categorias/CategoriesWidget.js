import {
    Card,
    Typography,
    CardBody,
    ThemedButton,
} from "../../../components/material";
import React from "react";
import {getCategories} from "./actions";
import NewButton from "./components/NewButton";
import EditIcon from "../../../../public/icons/edit.svg";
import DeleteButtonPopover from "./components/DeleteButtonPopover";

export default async function CategoriesWidget() {

    const categories = await getCategories()

    return (
        <>

            <Card className="h-full">
                <CardBody className="p-4 bg-white dark:bg-big-stone-900 h-full">
                    <div className="mb-4 flex justify-between items-center">
                        <Typography variant="h4" className='text-xl dark:text-white'>
                            Categorias
                        </Typography>
                        <NewButton categories={categories} />
                    </div>

                    <div className="h-[275px] overflow-y-auto">

                    <table className="w-full min-w-max table-auto text-left ">
                        <tbody>
                            { categories.length === 0 && (
                                <tr>
                                    <td colSpan={2} className='text-center p-6 dark:text-white'>
                                        <div className='flex flex-col justify-center items-center gap-4'>
                                            No hay categorias
                                        </div>
                                    </td>
                                </tr>
                            )}

                            {categories.map((category) => (
                                <tr key={category.id}  className="odd:bg-blue-gray-50/50 dark:odd:bg-big-stone-800/20 dark:even::bg-big-stone-900">
                                    <td className="border-b border-blue-gray-100 dark:border-blue-gray-800 p-2 px-4">
                                        <Typography className="font-semibold dark:text-white">
                                            {category.title}
                                        </Typography>
                                    </td>
                                    <td className="border-b border-blue-gray-100 dark:border-blue-gray-800 py-2 px-4 flex justify-end">
                                        <ThemedButton colors={{
                                            light: 'black',
                                            dark: 'white'
                                        }} variant="text" size='sm' className='h-8 w-8 inline-flex items-center justify-center p-0' >
                                            <EditIcon className='w-5 h-5' />
                                        </ThemedButton>
                                        <DeleteButtonPopover item={category} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}
