import React from 'react';
import { Chart } from "react-google-charts";
import { useState,useEffect } from 'react';

function ChartComponent({totalE,totalIn}) {
    const [egresos,setEgresos]=useState(totalE);
    const [ingresos,setIngresos]=useState(totalIn);
    useEffect(()=>{
        setEgresos(totalE);
        setIngresos(totalIn);
    },[totalE,totalIn]);

    const data = [
        [
            "Element",
            "monto total",
            { role: "style" },
            {
                sourceColumn: 0,
                role: "annotation",
                type: "string",
                calc: "stringify",
            },
        ],
        ["egresos", parseFloat(egresos), "red", null],
        ["ingresos",parseFloat(ingresos), "green", null]
    ];

    const options = {
        title: "gestion de gastos totales",
        width: 700,
        height: 500,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    };

    return (<div>
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={options}
        />
    </div>
    );
}

export default ChartComponent;
