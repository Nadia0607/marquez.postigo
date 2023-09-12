import React from 'react'
import "./TarjetaAgente.css"
import { Link } from 'react-router-dom'

export default function TarjetaAgente(props) {
  return (
    <div className='tarjetaagente shadow'>
    <img src={props.agente.displayIconSmall} alt="imagen" className='imagenagente'/>
    <Link to={`/detalle/${props.agente.uuid}`}>
    <h2>{props.agente.displayName}</h2>
    </Link>
    </div>
  )
}
