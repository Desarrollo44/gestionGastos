import React, { useState, useEffect } from "react";

function Results({ dataE,styleCard }) {
    const [generalData, setGeneralData] = useState(dataE);
    

    useEffect(() => {
        setGeneralData(dataE);
    }, [dataE]);
    return (<>
        {generalData.length === 0 ? (
            <div style={{ margin: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ fontSize: '40px', border: 'solid 2px', borderRadius: '20px', padding: '15px' }}>No se han generado movimientos</h1>
            </div>
        ) :
            (
                <div class="list-group" style={{margin:'10px', maxHeight: '20rem', overflowY: 'auto', border: 'solid 3px', borderRadius: '20px', width: '160x' }}>
                {
                    generalData.map((data, index) => (
                        <div key={index} class={styleCard}>
                            <span style={{fontSize:'40px'}} class="material-symbols-outlined">
                                {data.icon}
                            </span>
                            <p style={{width: '150px', wordWrap: "break-word"}}>{`Descripción: ${data.descripcion}`}</p>
                            <p>{`monto: $ ${data.cantidad}`}</p>
                            <p>{`fecha de realización: ${data.fecha}`}</p>
                        </div>
                    ))
                }
                </div>
            )
        }

    </>);
}

export default Results;
