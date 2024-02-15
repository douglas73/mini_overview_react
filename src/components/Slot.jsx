

const Slot = ({children}) => {
    return  (
        <>
            <p className="text-2xl font-bold">Este  é o componente Slot</p>
            {children}
        </>
    )
}

export default Slot