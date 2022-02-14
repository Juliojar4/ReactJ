/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import If from './if'

export default (props) => {
    const usuario = props.Usuario || {}
    return (
    <div>
            <If test={usuario && usuario.nome}>
                Seja Bem vindo { usuario.nome }
            </If>    
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo Amigo
            </If>
    </div>
    )
}