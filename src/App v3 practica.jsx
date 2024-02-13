import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  const [pacientes, setPacientes] = useState([]) // es un state para que se comparta con los demás componentes

  // Para poder compartir un valor desde hijo hacia el padre, se hace lo siguiente:
  const toma1Valor = (valor) => {
    console.log(valor)
  }

  return (
    <div className="container mx-auto mt-10">
      <Header
        // se manda el prop
        toma1Valor = { toma1Valor }
      />
      <div className="mt-14 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
      
    </div>
  )
}
export default App
