import React from "react"
import "../compo_style/ContenPdto.css"

const DtllePdto = ( {pdto}) => {
  return (
    <div className="conteiner-pdto">
        <div className="pdto-detalle">
            <img src={pdto.image} alt={pdto.title} />
            <div>
                <h3 className="titulo-dtlle-pdto">{pdto.title}</h3>
                <p className="descripcion">{pdto.description}</p>
                <p className="categoria">Categoria {pdto.category}</p>
                <p className="precio">${pdto.price}</p>
            </div>
        </div>
    </div>
  )
}

export default DtllePdto