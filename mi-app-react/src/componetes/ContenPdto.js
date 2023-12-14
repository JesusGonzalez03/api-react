import { useEffect, useState } from "react";
import { pedirData } from "../helpers/pedirData";
import ListaPdto from "./ListaPdto";
import "../compo_style/ContenPdto.css"
import { useParams } from "react-router-dom";

const ContenPdto = () => {

    const [productos, setProductos] = useState([]);
    const [title, setTitle] = useState("Productos");
    const category = useParams().category;
    console.log(category);

    useEffect(() => {
        pedirData()
        .then((res) => {
          if (category) {
            setProductos(res.filter((prod) => prod.category === category ) );
            setTitle(category);
          }else {
            setProductos(res);
            setTitle("Productos");
          }
        })
    }, [category])

    
  return (
    
    <div>
      <ListaPdto productos={productos} title={title} />
    </div>
  )
}

export default ContenPdto