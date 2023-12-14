import React from 'react'
import "../compo_style/Barrasnav.css"
import { Link } from 'react-router-dom'

const Barrasnav = () => {
  return (
    <nav>

      <input type='checkbox' id='toggle'/>
  
        <Link to='/'className='logo'>Evolution Code</Link>
        
        <ul className='list-nav'>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Cursos</Link></li>
            <li><Link to="/pdto/frontend">Frontend</Link></li>
            <li><Link to="/pdto/backend">Backend</Link></li>
            <li><Link to="/pdto/fullstack">Fullstack</Link></li>
            <li><Link to="/pdto/basesdedatos">Bases de datos</Link></li>
            <li><Link to="/pdto/frameworks">Frameworks</Link></li>
            <li><Link to="/sobrenosotros">Sobre nosotros</Link></li>
            <li className='right-bottom'><Link to="/registro">Registrate</Link></li>
        </ul>
        <label htmlFor='toggle' className='barra-menu'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </label>
    </nav>


  )
}

export default Barrasnav