import React, { useState }from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    function geraNumerosNaoContidos(max, min, array) {
        const aleatorio = parseInt(Math.random() * (max - min) + min)

        return array.includes(aleatorio) ? geraNumerosNaoContidos(max, min, array) :
        aleatorio
    }

    function geraNumero(qntd) {
    const numero = Array(qntd)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = geraNumerosNaoContidos(1, 60, nums)
            return [...nums, novoNumero]
        },[])
    return numero
    }

    const [qtde , setPasso] = useState(props.qtde || 6)
    const numeroInicial =  Array(qtde).fill(0)
    const [numero, setNumeros] = useState(numeroInicial)

    return (
        <div>
            <h2>Mega</h2>
            <h2>{numero.join(' ')}</h2>
            <label>Qtde de Números</label>
            <input type="Number" values={qtde}
                onChange={e => setPasso(+e.target.value)}/>
            <button onClick={() => setNumeros(geraNumero(qtde))}>Gerar numeros</button>
        </div>
    )
}