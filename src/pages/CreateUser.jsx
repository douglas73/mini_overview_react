import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"


const CreateUser = () => {

    const [cargos, setCargos] = useState({})
    const [funcionario, setFuncionario] = useState({})
    const  navigate  = useNavigate()


    useEffect(() => {
        fetch("http://localhost:5000/cargos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json())
        .then((data) => setCargos(data))
    },[])

    function createUser(dados) {
        fetch("http://localhost:5000/funcionarios",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        }).then( (data) => {
            console.log('dados', data)
            navigate('/users')
        }).catch((err) => console.log(err))
    }


    function handleChange(e) {
        setFuncionario({...funcionario, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        createUser(funcionario)
    }

    console.log('funcionario', funcionario)

    return (
        <>
            <Header />
            <div className="w-ful p-10">
                <p className="text-4xl font-bold">Cadastro de Funcionário </p>
            </div>
            <div className="flex items-center justify-between p-10 bg-gray-50 rounded-2xl">
                <div className="w-full">
                    <form onSubmit={submit} className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="full-name"
                                >
                                    Nome Completo
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="full-name"
                                    name="full_name"
                                    type="text"
                                    placeholder="Digite um nome completo"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="email"
                                >
                                    e-mailCategory
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Digite um e-mail válido (ex: email@email.com)"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-office"
                                >
                                    Cargo
                                </label>
                                <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    name="office"
                                    id="office"
                                    onChange={handleChange}
                                >
                                    { cargos.length > 0 ? cargos.map((item) => (
                                        <option key={item.id} value={item.nome}>{item.nome}</option>
                                    )) : (<option>Carregando...</option>)}
                                    <option>Escolha um cargo</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between pt-10 ml-3 gap-3">
                                <button
                                    type="submit"
                                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >
                                    Gravar
                                </button>
                                <button
                                    type="button"
                                    className="text-white bg-gradient-to-r from-gray-300 via-gray-600 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default CreateUser
