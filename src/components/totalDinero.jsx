import { useState,useEffect } from "react";

function Total({totalE,totalIn}) {
    const [egresos,setEgresos]=useState(totalE);
    const [ingresos,setIngresos]=useState(totalIn);
    const [total,setTotal]=useState(totalIn-totalE);

    useEffect(()=>{
        setEgresos(totalE);
        setIngresos(totalIn);
        setTotal(totalIn-totalE);
    },[totalE,totalIn]);

    return (<>
    <h2 style={{
        margin:'45px 100px'
    }} class="text-primary">{`Total: $${total}`}</h2>
    </>);
}

export default Total;