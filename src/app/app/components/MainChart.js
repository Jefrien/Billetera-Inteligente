'use client';
import Chart from "react-apexcharts";
import {Card, CardBody} from "../../../components/material";
import {useState} from "react";

export default function MainChart() {

    const [chartOptions, setChartOptions] = useState({
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91],
                colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
            }
        ]
    });

    return (
        <Card>
            <CardBody className="px-2 pb-0 bg-white dark:bg-big-stone-900">
                <Chart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type="bar"
                    width="500"
                />
            </CardBody>
        </Card>
    )
}
