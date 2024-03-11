
import Egresos from "./components/egresos";
import Ingresos from "./components/ingesos";
import Total from "./components/totalDinero";

function App() {
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
        <div style={{
          display: 'flex',
          gap:'40px',
          width:'100%',
          justifyContent:'center',
          marginTop:'10%'
        }}> 
          <Egresos />
          <Ingresos />
        </div>
      </body>
    </div>
  );
}

export default App;
