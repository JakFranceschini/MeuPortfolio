import PaginaHome from "./Pages/Home/PaginaHome";
import PaginaSobre from "./Pages/Sobre/PaginaSobre";
import PaginaProjetos from "./Pages/Projetos/PaginaProjetos";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function Rotas() {
  return (
    <div className="Rotas">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaHome/>}/>
        </Routes>
        <Routes>
          <Route path="/projetos" element={<PaginaProjetos/>}/>
        </Routes>
        <Routes>
          <Route path="/sobre" element={<PaginaSobre/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Rotas;
