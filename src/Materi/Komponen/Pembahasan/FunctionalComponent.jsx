import { useState } from "react";

const FunctionalComponent = ({name}) => {
    
    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue(value + 1)
    }

    const handleMinus = () => {
        if (value > 0) {
            setValue(value - 1)

        }
        
    }

    return (
        <div>
            <h1>Membuat komponen dengan functional component</h1>
            <h2>Hallo {name}, selamat belajar</h2>
            <button onClick={handleMinus}>-</button>
            <span>{' '} {value} {' '}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}

export default FunctionalComponent;