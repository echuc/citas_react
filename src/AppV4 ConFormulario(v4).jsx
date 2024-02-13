import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  const [pacientes, setPacientes] = useState([]) // es un state para que se comparta con los demás componentes

  return (
    <div className="container mx-auto mt-10">
      <Header
      />
      <div className="mt-14 md:flex">
        <Formulario
          pacientes = { pacientes }
          setPacientes = { setPacientes }
        />
        <ListadoPacientes />
      </div>
      
    </div>
  )
}
export default App
