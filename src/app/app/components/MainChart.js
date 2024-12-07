"use client";
import { Tooltip } from "../../../components/material";
import { useEffect } from "react";
import { useState } from "react";

export default function MainChart({ data }) {
  const [itemsChart, setItemsChart] = useState([]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const fillRealData = async () => {
    const totalItems = data.length;

    // each items and wait 100ms each one
    // to simulate a real time chart
    for (let i = 0; i < totalItems; i++) {
      const item = data[i];
      setItemsChart((prev) => {
        const newItems = prev.map((prevItem) => {
          if (prevItem.label === item.label) {
            return {
              ...prevItem,
              value: item.value,
              valueAlt: item.valueAlt,
            };
          }
          return prevItem;
        });
        return newItems;
      });
      await delay(100);
    }
  };

  const setupInitialData = () => {
    // set all items to 0
    const items = data.map((item) => {
      return {
        label: item.label,
        value: 0,
        valueAlt: 0,
        color: item.color,
      };
    });
    setItemsChart(items);

    setTimeout(() => {
      fillRealData();
    }, 100);
  };

  useEffect(() => {
    setupInitialData();
  }, []);

  return (
      <div className='relative'>

        <div className='relative pl-10 '>
          <div
              className='absolute opacity-70 left-0 h-full -top-[0] border-r-2 border-gray-300 dark:border-white/10 flex-none text-[10px] pl-8'>
            <div
                className='h-10 absolute left-0 top-[-10%] w-full flex items-center justify-center dark:text-white'>100%
            </div>
            <div className='h-10 absolute left-0 top-[0%] w-full flex items-center justify-center dark:text-white'>90%
            </div>
            <div className='h-10 absolute left-0 top-[10%] w-full flex items-center justify-center dark:text-white'>80%
            </div>
            <div className='h-10 absolute left-0 top-[20%] w-full flex items-center justify-center dark:text-white'>70%
            </div>
            <div className='h-10 absolute left-0 top-[30%] w-full flex items-center justify-center dark:text-white'>60%
            </div>
            <div className='h-10 absolute left-0 top-[40%] w-full flex items-center justify-center dark:text-white'>50%
            </div>
            <div className='h-10 absolute left-0 top-[50%] w-full flex items-center justify-center dark:text-white'>40%
            </div>
            <div className='h-10 absolute left-0 top-[60%] w-full flex items-center justify-center dark:text-white'>30%
            </div>
            <div className='h-10 absolute left-0 top-[70%] w-full flex items-center justify-center dark:text-white'>20%
            </div>
            <div className='h-10 absolute left-0 top-[80%] w-full flex items-center justify-center dark:text-white'>10%
            </div>
            <div className='h-10 absolute left-0 top-[90%] w-full flex items-center justify-center dark:text-white'>0
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 xl:gap-6">
            {itemsChart.map((item, index) => (
                <div key={index} className='grid grid-cols-2 gap-1'>
                  <div
                      className={
                        "h-60 group bg-black/5 dark:bg-gray-700/5 w-full flex items-end justify-center rounded-mds"
                      }
                  >
                    <Tooltip content={"Previsto: " + item.value + "%"}>
                      <div
                          className={
                            "w-full transition-all block group-hover:opacity-80 cursor-pointer bg-blue-600 "
                          }
                          style={{height: `${item.value}%`}}
                      ></div>
                    </Tooltip>
                  </div>
                  <div
                      className={
                        "h-60 group bg-black/5 dark:bg-gray-700/5 w-full items-end justify-center rounded-md flex"
                      }
                  >

                    <Tooltip content={"Real: " + item.valueAlt + "%"}>
                      <div
                          className={
                            "w-full transition-all block group-hover:opacity-80 cursor-pointer bg-lime-600 "
                          }
                          style={{height: `${item.valueAlt}%`}}
                      ></div>
                    </Tooltip>
                  </div>
                </div>
            ))}
          </div>

        </div>
        <div className="pl-10 grid grid-cols-3 gap-4 xl:gap-6">
          {itemsChart.map((item, index) => (
              <span key={'labels_'+index} className="text-center mt-1 w-full block dark:text-white">
                {item.label}
              </span>
          ))}
        </div>
      </div>
  );
}
