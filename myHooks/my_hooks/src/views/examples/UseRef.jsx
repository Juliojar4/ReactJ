import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'

const marge = function (s1, s2) {
    return [...s1 ].map(function (num, index) {
        return `${num} ${s2[index] || ""}`
    }).join("")
}

const UseRef = (props) => {

    const [value1, setValue] = useState("")
    const [value2, setValue2] = useState("")

    const count = useRef(0)
    const myInput = useRef(null)
    const myInput2 = useRef(null)

    console.log(myInput2.current)
    
    useEffect(function () {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])
    
    useEffect(function () {
        count.current = count.current + 1
        myInput.current.focus()
    } ,[value2])


    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            /> 
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{marge(value1, value2)}</span>
                    <span className="text red">{count.current}</span>
                <input type="text" className="input"
                ref={myInput}        
                value={value1} onChange={(e) => setValue(e.target.value)}
                />
                </div>
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2}
                    value={value2} onChange={e => setValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
