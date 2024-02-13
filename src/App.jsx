import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  const [pacientes, setPacientes] = useState(() =>  
    { 
      const dato = localStorage.getItem('pacientes');
      return dato ? JSON.parse(dato) : [];
    } 
  );
  
  const [paciente, setPaciente] = useState({}) // es un state para que se comparta con los demás componentes
  

  // Guardar los datos en localstorage
  // el requisito es que se guarden cadenas y no arreglos, hay que convertir
  useEffect(() => {
    // console.log('Componente listo o ha cambiado pacientes')
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])


  const eliminarPaciente = (id) => {
    // console.log('Eliminando Paciente', id)
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);

    // console.log(pacientesActualizados)
    setPacientes(pacientesActualizados)  // Se van a actualizar los pacientes --borrar --
  }
  
  return (
    <div className="container mx-auto mt-10">
      <Header
      />
      <div className="mt-14 md:flex">
        <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes 
          // Se van a pasar los pacientes como Props
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}  // Se van a pasar los pacientes como Props
        />
      </div>
      
    </div>
  )
}
export default App
