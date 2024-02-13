
const Paciente = ( {paciente, setPaciente, eliminarPaciente} ) => {
  // console.log(paciente)
  const { mascota, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => { 
    // console.log('Eliminar ', id)
    const respuesta = confirm('¿Deseas eliminar este paciente?')
    if(respuesta){ 
      eliminarPaciente(id)
    }    
  }

  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 mt-5 rounded-md">
        <p className="font-bold mb-3 text-indigo-900">
          Nombre : { ' '}
          <span className="text-indigo-500">{mascota}</span>
        </p>

        <p className="font-bold mb-3 text-indigo-900">
          Propietario : { ' '}
          <span className="text-indigo-500">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-indigo-900">
          Correo electrónico : { ' '}
          <span className="text-indigo-500">{email}</span>
        </p>

        <p className="font-bold mb-3 text-indigo-900">
          Fecha de alta : { ' '}
          <span className="text-indigo-500">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-indigo-900">
          Síntomas : { ' '}
          <span className="text-indigo-500">{sintomas}</span>
        </p>
        
        <div className="flex justify-between mt-10 mx-10">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded-md"
            onClick={() => setPaciente(paciente)}
          >Editar
          </button>
          <button
            type="button"
            className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white font-bold rounded-md"
            onClick={ handleEliminar }
          >Eliminar
          </button>
        </div>
        
      </div>
  )
}

export default Paciente
