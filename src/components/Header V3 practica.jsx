function Header( { toma1Valor } ) {
    const valorVariableHeader = true
    toma1Valor(valorVariableHeader) // de esta manera el hijo envia un valor al nivel superior (padre)

    return (
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto text-indigo-900">
                Seguimiento Pacientes {' '}
                <span className="text-indigo-600">Veterinaria</span>
            </h1>
    )
}

export default Header