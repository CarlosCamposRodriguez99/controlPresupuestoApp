

const ControlPresupuesto = ({presupuesto}) => {

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocalString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aquí</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> ${formatearCantidad}
        </p>

      </div>
      
    </div>
  )
}

export default ControlPresupuesto
