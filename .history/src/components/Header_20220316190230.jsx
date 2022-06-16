import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      <NuevoPresupuesto />
      
    </header>
  )
}

export default Header
