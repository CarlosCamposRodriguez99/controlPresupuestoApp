import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
  const [mensaje, setMensaje] = useState('');
  const [inputPresupuesto, setInputPresupuesto] = useState(''); // Estado para manejar el input como cadena

  const handlePresupuesto = (e) => {
    e.preventDefault();

    const presupuestoNumero = Number(inputPresupuesto); // Convertimos el input a número para validar

    if (!presupuestoNumero || presupuestoNumero < 0) {
      setMensaje('No es un presupuesto válido');
      return;
    }

    setMensaje('');
    setPresupuesto(presupuestoNumero); // Asegúrate de guardar el presupuesto como número en el estado global
    setIsValidPresupuesto(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text" // Cambiado a text para mejor control
            placeholder="Añade tu Presupuesto"
            value={inputPresupuesto}
            onChange={(e) => {
              const valor = e.target.value;
              // Permitimos solo números (y opcionalmente un punto para decimales)
              if (!valor || valor.match(/^\d*\.?\d{0,2}$/)) {
                setInputPresupuesto(valor);
              }
            }}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
