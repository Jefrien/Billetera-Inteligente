'use client'
import {useNewCategoryStore} from "../../../../store/categories";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter, Typography, ThemedButton,
} from "../../../../components/material";
import {Chip} from "@material-tailwind/react";
import React from "react";
import {bulkInsertCategories} from "../actions";
import LoaderIcon from "../../../../../public/icons/loader.svg";

export default function DefaultsCategoriesModal() {

    const { isDefaultCategoriesOpen, toggleDefaultCategories, closeDefaultCategories } = useNewCategoryStore()
    const [loading, setLoading] = React.useState(false)

    const defaultCategories = [
        "Casa",
        "Comida",
        "Transporte",
        "Salud",
        "Educación",
        "Entretenimiento",
        "Ropa",
        "Regalos",
        "Ahorros",
        "Inversiones",
        "Deudas",
        "Mascotas",
        "Seguros"
    ]


    const handleCreate = async () => {
        setLoading(true)
        await bulkInsertCategories(defaultCategories)
        closeDefaultCategories()
        setLoading(false)
    }

  return (
      <Dialog open={isDefaultCategoriesOpen} handler={toggleDefaultCategories} className='dark:bg-big-stone-900 text-white p-6'>

          {loading && (
              <div
                  className='absolute left-0 top-0 z-10 backdrop-blur bg-black/50 w-full h-full flex items-center justify-center'>
                  <LoaderIcon className='animate-spin h-10 w-10 text-white'/>
              </div>
          )}

          <DialogHeader className='dark:text-white'>Aún no tienes categorías</DialogHeader>
          <DialogBody className='dark:text-white'>
              Se crearan estas categorías por defecto, puedes editarlas o eliminarlas si lo deseas.

                  <div className="flex flex-wrap gap-4 mt-4">
                      {defaultCategories.map((category) => (
                          <div key={category} className='flex items-center gap-1'>
                              <Chip value={category} color='blue' size='lg'/>
                          </div>
                      ))}
                  </div>
          </DialogBody>
          <DialogFooter className='gap-4'>
              <ThemedButton variant={'outlined'} onClick={toggleDefaultCategories}>
                    Cancelar
                </ThemedButton>
              <ThemedButton onClick={handleCreate} >
                  Crear categorías
              </ThemedButton>
          </DialogFooter>
      </Dialog>
);
}