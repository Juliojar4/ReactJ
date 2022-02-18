import React, { useState } from 'react'

export default function Imc() {


    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    

        return (
            <div>
                <h2>Contador</h2>
            <div>
                <label>
                    Altura
                    <input type="Number" value={altura}
                        onChange={(e) => {setAltura(e.target.value)}}/>
                </label>
            </div>
            <div>
                <label>
                    Peso 
                    <input type="Number" value={peso} onChange={(e) => {setPeso(e.target.value)}} />
                </label>
            </div>
            <div>
                <label>
                    <p>{Math.round(peso / (altura*altura))}</p>
                </label>
            </div>
            </div>
        )
}