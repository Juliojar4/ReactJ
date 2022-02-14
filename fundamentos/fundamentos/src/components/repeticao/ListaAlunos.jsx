/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import alunos from '../../data/alunos'


export default props => {
    const arryAlunos = alunos.map((aluno) => {
        return(
            <tr key={aluno.nome}>
                {aluno.id} {aluno.nome} {aluno.notas}
            </tr>
        )
    })
    return (
        <div>
            <ul style={{ listStyle:'none'}}>
                {arryAlunos}
            </ul>
        </div>
    )
} 