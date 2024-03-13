import Egresos from "./components/egresos";
import Ingresos from "./components/ingresos";
import Total from "./components/totalDinero";
import './App.css'
import { useState, useEffect } from "react";
import ChartComponent from "./components/chartBar";
import LineChart from "./components/chartDates";

function App() {
  const [totalIn, setTotalIn] = useState(0);
  const [totalE, setTotalE] = useState(0);
  const [dataE, setDataE] = useState([]);
  const [dataIn, setDataIn] = useState([]);


  const getTotalIn = async (newTotal) => {
    // Usamos la función de callback para asegurarnos de obtener el valor más reciente
    setTotalIn(prevTotal => {
      // console.log("Previo total de ingresos:", prevTotal);
      // console.log("Nuevo total de ingresos:", newTotal);
      return newTotal;
    });
  };
  const getTotaE = async (newTotalE) => {
    setTotalE(newTotalE);
  }

  const getDataE = async (newDataE) => {
    setDataE(newDataE);
  }

  const getDataIn = async (newDataIn) => {
    setDataIn(newDataIn);
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ color: 'white', fontSize: '70px' }} class="material-symbols-outlined">
              savings
            </span>
            <h1 class="navbar-brand" style={{ fontSize: '35px' }}>Gestor de Gastos Personales</h1>
          </div>
        </nav>
      </header>
      <body>
        <Total totalE={totalE} totalIn={totalIn} />

        <div style={{display:'flex', justifyContent:'center',gap:'250px', alignItems:'center'}}>
          <ChartComponent totalE={totalE} totalIn={totalIn} />
          <LineChart dataEgresos={dataE} dataIngreso={dataIn} />
        </div>
        <div style={{
          display: 'flex',
          gap: '40px',
          width: '100%',
          justifyContent: 'center',
          marginTop: '10%'
        }}>
          <Egresos getTotalE={getTotaE} getDataE={getDataE} />
          <Ingresos getTotal={getTotalIn} getDataIn={getDataIn} />
        </div>
      </body>
    </div>
  );
}

export default App;
