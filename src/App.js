import Egresos from "./components/egresos";
import Ingresos from "./components/ingresos";
import Total from "./components/totalDinero";
import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [totalIn, setTotalIn] = useState(0);
  const [totalE, setTotalE] = useState(0);
  // Este efecto se ejecutará cada vez que totalIn cambie
  // useEffect(() => {
  //   console.log("Nuevo total de ingresos:", totalIn);
  // }, [totalIn]);

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
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div style={{display:'flex', alignItems:'center',gap:'20px'}}>
            <span style={{color:'white', fontSize:'70px'}} class="material-symbols-outlined">
              savings
            </span>
            <h1 class="navbar-brand" style={{ fontSize: '35px' }}>Gestor de Gastos Personales</h1>
          </div>
        </nav>
      </header>
      <body>
        <Total totalE={totalE} totalIn={totalIn} />

        <div style={{
          display: 'flex',
          gap: '40px',
          width: '100%',
          justifyContent: 'center',
          marginTop: '10%'
        }}>
          <Egresos getTotalE={getTotaE} />
          <Ingresos getTotal={getTotalIn} />
        </div>
      </body>
    </div>
  );
}

export default App;
