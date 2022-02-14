import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const { min, max } = props
  const aleatorio = parseInt(Math.random() * (max - min)) + min
  return (
    <>
      <h2>Valor Aleatorio</h2>
      <p>
        <strong>Valor Minimo: {props.min}</strong>
      </p>
      <p>
       <strong>Valor Minimo: {props.max}</strong>
      </p>
      <p>
        <strong>Valor Aleatorio: {aleatorio}</strong>
      </p>
    </>
  )
}

