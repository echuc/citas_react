// import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  // const [pacientes, setPacientes] = useState([]) // es un state para que se comparta con los demás componentes

  // ejemplo de función
  const sumaValores = () => {
    console.log(2+2)
  }

  return (
    <div className="container mx-auto mt-10">
      <Header 
        numeros = { 1 }
        isAdmin = { false }
        valorFuncion = { sumaValores }
      />
      <div className="mt-14 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
      
    </div>
  )
}
export default App
