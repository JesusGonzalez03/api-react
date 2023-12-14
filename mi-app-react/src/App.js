import Barrasnav from "./componetes/Barrasnav";
import ContenDtllepdto from "./componetes/ContenDtllepdto";
import ContenPdto from "./componetes/ContenPdto";
import IniSesionform from "./componetes/IniSesionform";
import Regisform from "./componetes/Regisform";
import SobreNosotros from "./componetes/SobreNosotros";
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

  return (
    <BrowserRouter> 

    <Barrasnav /> 

    <Routes> 
      <Route path="/" element={<IniSesionform />} />
      <Route path="/productos" element={<ContenPdto />} />
      <Route path="/productos/:id" element={<ContenDtllepdto />} />
      <Route path="/pdto/:category" element={<ContenPdto />} />
      <Route path="/sobrenosotros" element={<SobreNosotros />} />
      <Route path="/registro" element={<Regisform />} />
     
    </Routes>
    </BrowserRouter>
 
   );
}

export default App;
