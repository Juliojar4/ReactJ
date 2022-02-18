import React, { Component } from 'react'

import Display from './display'
import Botao from './botao'
import PassoForm from './passoForm'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({
            numero:this.state.numero + this.state.passo,
        })
    }

    dec = () => {
        this.setState({
            numero:this.state.numero - this.state.passo,
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <PassoForm passo={this.state.passo} setPasso=
                {this.setPasso} />
                <Display numero={this.state.numero}/>
            <Botao incrementar={this.inc} decrementar={this.dec}>+</Botao>
            </div>
        )
    }
}