import Paciente from "./Paciente"

const ListadoPacientes = ( {pacientes, setPaciente, eliminarPaciente} ) =>  {
  // console.log(pacientes)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll py-2">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-bold text-3xl text-center text-indigo-900">Listado de Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-5">
            Administra tus {' '}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
        
        
          { pacientes.map( ( paciente ) => ( // muestra los valores del objeto
            //<h1>{paciente.mascota}</h1>
            <Paciente 
              key={paciente.id} // Se le pasa el index para que no se repita el id
              paciente={paciente} // Se le pasa el objeto paciente que contiene los datos
              setPaciente={setPaciente} // Se le pasa el setPaciente para que se actualice el estado de la aplicación
              eliminarPaciente = {eliminarPaciente} // Se le pasa el eliminarPaciente para borrarlo segun su id
            />
              
            )) 
          }
        </>

        ) : (
          <>  
            <h2 className="font-bold text-3xl text-center text-indigo-900">No hay Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-5">
              Agrega nuevos Pacientes {' '}
              <span className="text-indigo-600 font-bold">Esperando...</span>
            </p>
          </>
        ) 
      }
      
    </div>
    
  )
}
export default ListadoPacientes