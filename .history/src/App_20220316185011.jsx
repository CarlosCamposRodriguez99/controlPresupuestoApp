import { useState } from 'react';
import Header from './components/Header';

function App() {

  const [presupuesto, setPresupuesto] = useState(0)

  return (
    <div>
      <Header 
        presupuesto={presup}
      />
    </div>

  )
}

export default App
