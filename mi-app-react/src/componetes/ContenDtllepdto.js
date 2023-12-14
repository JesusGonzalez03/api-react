import { useEffect, useState } from "react";
import { pedirPdtoPorId } from "../helpers/pedirData";
import DtllePdto from "./DtllePdto";
import "../compo_style/ContenPdto.css";
import { useParams } from "react-router-dom";


const ContenDtllepdto = () => {

    const [pdto, setPdto] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        pedirPdtoPorId(Number(id))
         .then((res) => {
            setPdto(res);
         })
    }, [id])
    
  return (
    <div>
        {pdto && <DtllePdto pdto={pdto} />}
    </div>
  )
}

export default ContenDtllepdto