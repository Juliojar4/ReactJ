import React from 'react'
import loja from '../../data/loja'
import './ListaLoja.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const arryLoja = loja.map((itens, i) => {
        return (
            
                <tr key={itens.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{ itens.id }</td>
                    <td>{ itens.nome }</td>
                    <td>{ itens.perco }</td>
                </tr>
        )
    })
    return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Proço</th>
                    </tr>
                </thead>
        <tbody>
                {arryLoja}
        </tbody>
            </table>

        )
}