import Paciente from "./Paciente"


function ListadoPacientes() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll py-2">
      <h2 className="font-bold text-3xl text-center text-indigo-900">Listado de Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-5">
        Pacientes {' '}
        <span className="text-indigo-600 font-bold">Citas</span>
      </p>

      {
        // Aqui estaban los datos del paciente, pero se ha creado un componente
      }
      
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      
    </div>
    
  )
}
export default ListadoPacientes
