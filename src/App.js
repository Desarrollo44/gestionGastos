import Egresos from "./components/egresos";
import Ingresos from "./components/ingresos";
import Total from "./components/totalDinero";
import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [totalIn, setTotalIn] = useState(0);

  // Este efecto se ejecutará cada vez que totalIn cambie
  useEffect(() => {
    console.log("Nuevo total de ingresos:", totalIn);
  }, [totalIn]);

  const getTotalE = async(newTotal) => {
    // Usamos la función de callback para asegurarnos de obtener el valor más reciente
    setTotalIn(prevTotal => {
      console.log("Previo total de ingresos:", prevTotal);
      console.log("Nuevo total de ingresos:", newTotal);
      return newTotal;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div class="container-fluid">
            <h1 class="navbar-brand" style={{ fontSize: '35px' }}>Gestor de Gastos Personales</h1>
          </div>
        </nav>
      </header>
      <body>
        <Total />
        <p>{totalIn}</p>
        <div style={{
          display: 'flex',
          gap: '40px',
          width: '100%',
          justifyContent: 'center',
          marginTop: '10%'
        }}>
          <Egresos />
          <Ingresos getTotal={getTotalE} />
        </div>
      </body>
    </div>
  );
}

export default App;
