import PaginaHome from './Pages/Home/PaginaHome'
import PaginaProjetos from './Pages/Projetos/PaginaProjetos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function Rotas() {

    return (
      <div className='Rotas'>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<PaginaHome/>}/>
              </Routes>
              <Routes>
                  <Route path='/Projetos' element={<PaginaProjetos/>}/>
              </Routes>
          </BrowserRouter>
      </div>
    )
}
  
export default Rotas;