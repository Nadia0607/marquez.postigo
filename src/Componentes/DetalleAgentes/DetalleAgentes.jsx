import React from 'react'

export default function DetalleAgentes({agente}) { //las llaves reemplazan props.
  return (
    <>
    <h1>{agente.displayName}</h1>
    <img src={agente.displayIcon} alt="imagen"/>
    <h2>Descripción:</h2>
    <p>{agente.description}</p>
    </>
  )
}
