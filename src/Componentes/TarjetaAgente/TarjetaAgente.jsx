import React from 'react'
import "./TarjetaAgente.css"
import { Link } from 'react-router-dom'

export default function TarjetaAgente(props) {
  return (
    <div className='tarjeta'>
    <img src={props.agente.displayIconSmall} alt="imagen" className='imagen'/>
    <Link to={`/detalle/${props.agente.uuid}`}>
    <h4>{props.agente.displayName}</h4>
    </Link>
    </div>
  )
}
