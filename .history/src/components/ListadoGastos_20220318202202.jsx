import React from 'react'

const ListadoGastos = ({gastos}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>

      {gastos.map}
      
    </div>
  )
}

export default ListadoGastos
