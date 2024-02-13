
// Usando props
/*
const Error = ({mensaje}) => {
  return (
    <div className='bg-red-800 text-white rounded-lg text-center font-bold py-3 px-5 mb-5'>
        <p> {mensaje} </p>
    </div>
  )
}

*/

// Segunda versión usando children
const Error = ({children}) => {
    return (
      <div className='bg-red-800 text-white rounded-lg text-center font-bold py-3 px-5 mb-5'>
          {children}
      </div>
    )
  }


export default Error

