import { useState } from "react"
import Relogio from "./Relogio"

const Placar = (props) => {

    const [visitante, setVisitante] = useState(0)
    const [local, setLocal] = useState(0)

    return (
        <>
            <div>
                <p className="text-2xl text-center pb-10">Jogo iniciado em {props.localEvento}  na data {props.data}</p>
                <div className="p-5">
                    <Relogio />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="border-8 border-gray-800 text-center p-8 rounded-2xl">
                        <p className="text-2xl font-bold">Visitante</p>
                        <p className="text-6xl font-bold">{visitante}</p>
                    </div>
                    <div className="border-8 border-gray-800 text-center p-8 rounded-2xl">
                        <p className="text-2xl font-bold">Local</p>
                        <p className="text-6xl font-bold">{local}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-8 rounded-2xl">
                        <button
                            type="button"
                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            onClick={() => setVisitante(visitante + 1)}
                        >
                            Gol do time Visitante</button>
                    </div>
                    <div className="text-center p-8 rounded-2xl">
                        <button
                            type="button"
                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            onClick={() => setLocal(local + 1)}
                        >Gol do Time Local</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Placar