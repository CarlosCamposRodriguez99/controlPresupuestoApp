

const ControlPresupuesto = ({presupuesto}) => {

  const formatearCantidad = (cantidad) => {
    cantidad.toLocalString('en-US', {
      style: 'currency',
      currency: 'US'
    })
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aquí</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> ${presupuesto}
        </p>

      </div>
      
    </div>
  )
}

export default ControlPresupuesto
