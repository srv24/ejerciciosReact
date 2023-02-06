import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class'

const ComponenteA = ({ contact }) => {
  
  return (
    <div>    
        <h2>Nombre: { contact.nombre } </h2>
        <h3>Apellido: { contact.apellido} </h3>
        <h4>Email: { contact.email} </h4>
        <h5>Estado: { contact.conectado ? 'Contacto en linea' : 'Contacto no disponible'}</h5>
    </div>
  )
}


ComponenteA.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
}

export default ComponenteA;
