

const Teste = (props) => {
    return (
        <>
            <p className="text-2xl"> Bem-vindo   <span className="font-bold">{props.pessoa}</span>!!</p>
            <p className="text-2xl">Você tem acesso ao módulo {props.modulo}</p>
        </>
    )
}

export default Teste