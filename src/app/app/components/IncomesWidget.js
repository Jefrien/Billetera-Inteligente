'use client'
import {
  Card,
  Typography,
  CardBody,
  Button, ThemedButton,
} from "../../../components/material";
import React from "react";
import {useNewIncomeStore} from "../../../store/incomes";

export default function IncomesWidget() {

  const { openDrawer, isNewIncomeOpen } = useNewIncomeStore()

  const TABLE_HEAD = ["Fecha", "Descripción", "Monto"];

  return (
    <>

      <Card className="h-full">
        <CardBody className="p-4 bg-white dark:bg-big-stone-900 h-full">
          <div className="mb-4 text-right">
            <ThemedButton colors={{
              light: 'black',
              dark: 'white'
            }} variant="text" className='inline-flex items-center gap-2' size='sm' onClick={openDrawer} >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Nuevo Ingreso
            </ThemedButton>
          </div>

          <table className="w-full min-w-max table-auto text-left">
            <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                  <th
                      key={head}
                      className="border-b border-blue-gray-100 dark:border-l-blue-gray-800 bg-blue-gray-50 dark:bg-big-stone-800 dark:text-white dark:border-big-stone-700 p-4"
                  >
                    <Typography
                        variant="small"
                        className="font-semibold leading-none opacity-70 "
                    >
                      {head}
                    </Typography>
                  </th>
              ))}
            </tr>
            </thead>
          </table>
        </CardBody>
      </Card>
    </>
  );
}
