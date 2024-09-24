import Menu from './components/common/Menu.jsx'
import Footer from './components/common/Footer.jsx'
import Index from './components/pages/Index.jsx'
import Administrador from "./components/pages/Administrador";
import FormularioProducto from "./components/pages/product/FormularioProducto";
import Error404 from "./components/pages/Error404";
import DetalleProducto from "./components/pages/DetalleProducto";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'
import CardProducto from './components/pages/product/CardProducto.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (

    
     <BrowserRouter>
        <Menu></Menu>
        <Routes>
          
            <Route path="/" element={<Index></Index>}></Route>
            <Route path="/administrador" element={<Administrador></Administrador>}></Route>
            <Route path="/administrador/crear" element={<FormularioProducto></FormularioProducto>}></Route>
            <Route path="/administrador/editar" element={<FormularioProducto></FormularioProducto>}></Route>
            <Route path="*" element={<Error404></Error404>}></Route>

        </Routes>
        <Footer></Footer>
     </BrowserRouter>
  
  )
}

export default App
