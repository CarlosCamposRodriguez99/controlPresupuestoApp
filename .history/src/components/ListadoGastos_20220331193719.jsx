import React from 'react';
import Gasto from './Gasto';

const ListadoGastos = ({
  gastos, 
  setGastoEditar, 
  eliminarGasto,
  gastosFiltrados,
  filtro
  }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>

      {
        filtro ? (
          <>
              gastosFiltrados.map( gasto => (
                <Gasto
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
              /> 
          ))
          </>
        ) : (
          gastos.map( gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))
        )
      }
      
    </div>
  )
}

export default ListadoGastos
