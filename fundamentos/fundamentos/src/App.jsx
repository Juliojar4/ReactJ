/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './App.css'

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import RandomNun from './components/basicos/RandomNun';
import Card from './components/layouts/Cart';
import Familia from './components/basicos/Familia'
import Membro from './components/basicos/Membro'
import Alunos from './components/repeticao/ListaAlunos'
import Loja from './components/repeticao/ListaLoja'
import ParOrImpar from './components/condicional/ParOrImpar'
import Usuario from './components/condicional/usuario'
import DiretaPai from './components/comunicacao/DiretaPai';
import IndeiretaPai from './components/comunicacao/IndeiretaPai';
import Input from './components/formulario/input'
import Contador from './components/contador/Contador'
import Mega from './components/megasena/Mega';
import Imc from './components/imc/Imc';

export default () => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>

            <div className="cards">

            <Card titulo="#13 IMC GG">
                    <Imc></Imc>
            </Card>


            <Card titulo="#12 Mega">
                    <Mega qntd={7}></Mega>
            </Card>

            <Card titulo="#11 Contador" color="#f23fff">
                    <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#10 Input" color="#CC1">
                    <Input></Input>
            </Card>

            <Card titulo="#9 Herança Indireta" color="#FF6F61">
                    <IndeiretaPai></IndeiretaPai>
            </Card>

            <Card titulo="#8 Herança Direta">
                    <DiretaPai color="#6B5B95"></DiretaPai>
            </Card>

                <Card titulo="#7 Condicional">
                    <ParOrImpar numero={31} color="#F7CAC9"></ParOrImpar>
                    <Usuario Usuario={{ nome: 'Julio' }}></Usuario>
                    <Usuario Usuario={{ nome: '' }}></Usuario>
                    <Usuario Usuario={{ nome: 'Julio' }}></Usuario>
                    <Usuario Usuario={{ email: 'fefefeefe'}}></Usuario>
                </Card>

                <Card titulo="Loja" color="#B565A7">
                    <Loja/>
                </Card>

                <Card titulo="#6 Notas" color="#955251">
                    <Alunos/>
                </Card>

                <Card titulo="#5 Componentes com filho" color="#34568B">
                    <Familia sobrenome="Ferreira">
                <Membro nome="Antonio" />
                <Membro nome="Anderson" />
                <Membro nome="André"/>
                    </Familia>
                </Card>

                <Card titulo="#4 Desafio Aleatorio" color="#FA6900">
                    <RandomNun min={ 1 } max={ 20 }></RandomNun>
                </Card>

                <Card titulo="#3 Primeiro" color="#E94C6F">
                    <Primeiro />
                </Card>

                <Card titulo="#2 Com Parametro" color="#E8B71A">
                    <ComParametro
                        titulo="Segundo Componente"
                        aluno="julio" nota={8.5}
                    />
                </Card>

                <Card titulo="#1 Fragmento" color="#588c73">
                    <Fragmento />
                    </Card>
            </div>
        </div>
    );
};