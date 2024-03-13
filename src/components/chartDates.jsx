import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

function LineChart({ dataEgresos, dataIngreso }) {
    const [egresos, setEgresos] = useState(dataEgresos);
    const [ingresos, setIngresos] = useState(dataIngreso);

    useEffect(() => {
        setEgresos(dataEgresos);
    }, [dataEgresos]);

    useEffect(() => {
        setIngresos(dataIngreso);
    }, [dataIngreso]);

    const egresosData = egresos.map(obj => [new Date(obj.fecha), parseFloat(obj.cantidad)]);
    const ingresosData = ingresos.map(obj => [new Date(obj.fecha), parseFloat(obj.cantidad)]);

    const chartData = [
        ['Fecha', 'Ingresos', 'Egresos'],
        ...ingresosData.map(([fecha, cantidad]) => [fecha, cantidad, null]),
        ...egresosData.map(([fecha, cantidad]) => [fecha, null, cantidad])
    ];

    const options = {
        title: 'Evolución del Valor a lo largo del tiempo',
        width: 600,
        height: 400,
        hAxis: {
            title: 'Fecha',
            format: 'dd/MM/yyyy' // Formato de las fechas en el eje horizontal
        },
        vAxis: {
            title: 'Valor'
        },
        legend: { position: 'bottom' } // Mostramos la leyenda en la parte inferior
    };

    return (<>
        {dataEgresos.length < 2 && dataIngreso.length < 2 ? (
            <div style={{ margin: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ fontSize: '40px', border: 'solid 2px', borderRadius: '20px', padding: '15px' }}>No se han generado suficientes movimientos</h1>
            </div>
        ) : (
            <Chart
            width={'100px'}
            height={'300px'}
            chartType="Line"
            loader={<div>Cargando Gráfico</div>}
            data={chartData}
            options={options}
        />
        )}
      
    </>
    );
}

export default LineChart;
