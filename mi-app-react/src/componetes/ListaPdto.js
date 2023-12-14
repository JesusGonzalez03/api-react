import Pdto from "./Pdto";
import { toCapital } from "../helpers/toCapital";
import "../compo_style/ContenPdto.css"

const ListaPdto = ( {productos, title} ) => {

  return (
    <div className="conteiner-pdto">
        <h1 className="titulo-pdto">{toCapital(title)}</h1>

        <div className="productos">
          { productos.map((prod) => <Pdto productos={prod} key={prod.id}/>) }
        </div>
    </div>
  )
}

export default ListaPdto