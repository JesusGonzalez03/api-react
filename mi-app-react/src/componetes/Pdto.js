import React from 'react'
import { Link } from 'react-router-dom'
import "../compo_style/ContenPdto.css"

const Pdto = ( {productos}) => {
  return (
    <div className='producto'>
      <img src={productos.image} />
      <div>
        <h4>{productos.title}</h4>
        <p>Valor: ${productos.price}</p>
        <p>Categoria: {productos.category}</p>
        <Link className="ver-mas" to={`/productos/${productos.id}`}>Ver mas</Link>
     </div>
    </div>
    
    
  )
}

export default Pdto
