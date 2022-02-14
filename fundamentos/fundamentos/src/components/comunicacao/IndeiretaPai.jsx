import React, { useState } from 'react'
import IndiretaFilho from './InidiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0) 
    let [nerd, setBool] = useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setBool(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome}</span>
                <span> <strong> {idade} </strong> </span>
                <span> {nerd ? 'Verdadeiro' : 'Falso'} </span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}