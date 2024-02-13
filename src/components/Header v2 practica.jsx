

//function Header(props) {
//    console.log(props)

function Header( {numeros, isAdmin, valorFuncion} ) {
    console.log(numeros)
    console.log(isAdmin)
    valorFuncion();

    return (
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto text-indigo-900">
                Seguimiento Pacientes {' '}
                <span className="text-indigo-600">Veterinaria</span>
            </h1>
    )
}

export default Header