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
import './bootstrap.min.css'
import CardProducto from './components/pages/product/CardProducto.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/pages/Login.jsx"

function App() {

  return (

    
     <BrowserRouter>
        <Menu></Menu>
        <Routes>
          
            <Route path="/" element={<Index></Index>}></Route>
            <Route path="/administrador" element={<Administrador></Administrador>}></Route>
            <Route path="/administrador/crear" element={<FormularioProducto titulo={'Nuevo Producto'} estoyCreando={true}></FormularioProducto>}></Route>
            <Route path="/administrador/editar/:id" element={<FormularioProducto titulo={'Editar Producto'} estoyCreando={false}></FormularioProducto>}></Route>
            <Route
        exact path="/login"
          element={<Login></Login>}
        ></Route>
            <Route path="*" element={<Error404></Error404>}></Route>

        </Routes>
        <Footer></Footer>
     </BrowserRouter>
  
  )
}

export default App
