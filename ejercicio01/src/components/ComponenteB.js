import React from 'react'
import { Contacto } from '../models/contacto.class'
import ComponenteA from './ComponenteA';

const ComponenteB = () => {
  
  const defaultContact = new Contacto("Julio", "Cortazar", "juliocortazar@hotmail.com", false);
  
    return (
    <div>
         <ComponenteA contact={defaultContact}/>
    </div>
  )
  
}


export default ComponenteB