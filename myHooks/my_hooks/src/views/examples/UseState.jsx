import React, { useState } from 'react'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    /* 
    Mesma coisa que:
    const num = array[0]
    const setNum = array[1]
    */


    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
                <div className="center">
                    <span className="text">{count}</span>
                <div>
                    <button className="btm"
                    onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btm"
                        onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btm"
                        onClick={() => setCount(current => current + 100)}>100</button>
                </div>
                </div> 
            <SectionTitle title="Exercício #02" />
            <input type="text" className="input"
                value={name} onChange={(e) => setName(e.target.value)} />
            {name}
        </div>
    )
}

export default UseState
