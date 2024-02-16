
import { useState, useEffect } from "react"
const Relogio = () => {

    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [estado, setEstado] = useState(1)

    useEffect(() => {

        if (estado) {
            const intervalId = setInterval(() => {
                setHora(new Date().toLocaleTimeString())
            }, 1000);
            return () => clearInterval(intervalId)

        } else {
            setEstado(0)
        }
    }, [])
    return (
        <>
            <p className="text-2xl rounded-xl text-center font-bold bg-gray-800 text-white"
                onClick={() => {
                    setEstado(!estado)
                }}
            >{estado ? hora : "Relógio Desligado!!!"}</p>
        </>
    )
}

export default Relogio