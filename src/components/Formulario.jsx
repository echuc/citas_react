
// En esta versión 4 se quita el mensaje de error para pasarlo a un componente

import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ( {pacientes, setPacientes, paciente, setPaciente } ) => {
  // Aqui van los estados de los componentes de los hooks
  // Creamos el state con un valor inicial
  // Debemos tener en cuenta que el state debe tener una función definida 
  // const [nommbre, setNombre] = useState('')
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  // Validar error 
  const [error, setError] = useState(false)

  useEffect(() => {
    console.log(paciente) // verificando que lleguen los datos del boton editar
    if (Object.keys(paciente).length > 0) {
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

 

  // Generar un ID
  const generarId = () => { 
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  // console.log(nombre)
  const handleSubmit  = e => {
    e.preventDefault() // no permite enviar aún el formulario
    console.log('Envió del Formulario')
    // Validación de los datos del formulario
    
    if ( [mascota, propietario, email, fecha, sintomas].includes('')) {
      console.log('Exite un campo vacío, verificar....')
      setError(true)
      return; // V2
    } 
 

    // Esta sección de ejecuta cuando pasa la validación del formulario
    setError(false)  // V2
   
    const objetoPaciente = { 
      mascota, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      id: generarId()
    }

    if(paciente.id) {
      // console.log('Editando el registro') 
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map ( 
        pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState 
      )
      setPacientes(pacientesActualizados)
      setPaciente({}) 

     } else {
      // console.log('Nuevo registro')
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente ]) 
    }
    

    // Reiniciar el formulario
    setMascota('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  } 

  return (

    <div className="md:w-1/2 lg:w-2/5 py-2">
    { // <div className="md:w-1/2 lg:w-2/5 border-2 border-indigo-500"> 
    }
      <h2 className="font-bold text-3xl text-center text-indigo-900">Seguimento de Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-5">
        Añade pacientes {' '}
        <span className="text-indigo-600 font-bold">Administrador</span>
      </p>

      <form className="bg-white shadow-md py-5 px-5 rounded-lg" 
            onSubmit= {handleSubmit}
      >
        
        <div className="mt-3">
          <label className="block text-indigo-900 font-bold">Nombre de mascota 
            <input 
              type="text" 
              id="mascota"
              placeholder="Escribe el nombre"
              className="border-2 border-indigo-500 w-full p-2 mt-1 placeholder-indigo-400 rounded-md"
              value={mascota}
              onChange={ e => setMascota(e.target.value)  //console.log(e.target.value)
                          // De esta manera se pueden modificar los hooks y se pueden 
                          // comprobando con la extensión de React Developers Tools de Chrome
                      }
              />
            </label>
        </div>
        <div className="mt-3">
          <label htmlFor="propietario" className="block text-indigo-900 font-bold">Nombre de propietario</label>
          <input 
            type="text" 
            id="propietario"
            placeholder="Escribe el propietario"
            className="border-2 border-indigo-500 w-full p-2 mt-1 placeholder-indigo-400 rounded-md"
            value={propietario}
            onChange={ e=> setPropietario(e.target.value) }
            />
        </div>
        <div className="mt-3">
          <label htmlFor="email" className="block text-indigo-900 font-bold">Correo Electrónico</label>
          <input 
            type="email" 
            id="email"
            placeholder="Correo electrónico propietario"
            className="border-2 border-indigo-500 w-full p-2 mt-1 placeholder-indigo-400 rounded-md"
            value={email}
            onChange={ e=> setEmail(e.target.value) }
            />
        </div>
        <div className="mt-3">
          <label htmlFor="fecha" className="block text-indigo-900 font-bold">Fecha de alta</label>
          <input 
            type="date"
            id="fecha"
            className="border-2 text-indigo-500 border-indigo-500 w-full p-2 mt-1 placeholder-indigo-400 rounded-md"
            value={fecha}
            onChange={ e=> setFecha(e.target.value) }
          />
        </div>
        <div className="mt-3">
          <label htmlFor="sintomas" className="block text-indigo-900 font-bold">Fecha de sintomas</label>
          <textarea 
            id="sintomas"
            placeholder="Escribe los síntomas"
            className="border-2 border-indigo-500 w-full p-2 mt-1 placeholder-indigo-400 rounded-md"
            value={sintomas}
            onChange={ e=> setSintomas(e.target.value) }
          />
        </div>
        <input 
          type="submit"
          className="bg-indigo-500 w-full mt-3 mb-2 p-2 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
        />


        { // error ? 'Error en formulario' : 'Formulario OK'  // v1
          // error && 'Error en formulario'  // v2
          // error && <Error mensaje='Tdoos los campos son obligatorios. Test' />
          
          error && <Error><p>Los campos son obligatorios</p><p>children</p></Error> // {children} 
          // se mueve al componente components/Error.jsx 
        }
      </form>

    </div>
    
  )
}
export default Formulario
