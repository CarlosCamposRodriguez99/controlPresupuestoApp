import { useState } from 'react';
import Header from './components/Header';
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />


      {isValid}
      <div className="nuevo-gasto">
        <img 
          src={IconoNuevoGasto}
          alt="icono nuevo gasto"
        />
      </div>
    </div>   

  )
}

export default App
