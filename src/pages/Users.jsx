import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect, useState } from "react"


const Users = () => {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()


    useEffect(() => {

        fetch("http://localhost:5000/funcionarios", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json()).then(
            (data) => {

                console.log("dados", data)
                setUsers(data)
            }
        )

    }, [])

    console.log('users>', users.length)

    users.map((item) => (
        <p key={item.id}>{item.full_name}</p>
    ))

    return (
        <>
            <Header title="Listagem de Usuários" />


            <div className="text-end mt-10">
                <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-10 mb-2"
                    onClick={() => navigate("/user/new")}
                >
                    Cadastrar Usuário
                </button>
            </div>

            <div className="p-10">
                <table className="table-auto border-collapse border border-slate-400 w-full">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 text-start pl-3">Nome</th>
                            <th className="border border-slate-300 text-start pl-3">
                                E-mail
                            </th>
                            <th className="border border-slate-300 text-start pl33">Cargo</th>
                            <th className="border border-slate-300 text-start w-30 pl-3">
                                Ações
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {Object.keys(users).length > 0 && (users.map((item) => (
                            <tr key={item.id}>
                                <td className="border border-slate-300 pl-3">
                                    {item.full_name}
                                </td>
                                <td className="border border-slate-300 pl-3">{item.email}</td>
                                <td className="border border-slate-300 pl-3">
                                    {item.office}
                                </td>
                                <td className="border border-slate-300 text-end pl-3 pt-3">
                                    <button
                                        type="button"
                                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        onClick={() => navigate(`/user/${item.id}`)}
                                    >
                                        Ver
                                    </button>
                                    <button
                                        type="button"
                                        className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        onClick={() => navigate(`/user/${item.id}/update`)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        type="button"
                                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        onClick={() => navigate(`/user/${item.id}/delete`)}
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        )))}
                    </tbody>
                </table>
            </div>

            <Footer />
        </>
    )
}

export default Users