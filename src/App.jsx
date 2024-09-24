import Menu from './components/common/Menu.jsx'
import Footer from './components/common/Footer.jsx'
import Index from './components/pages/Index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
      <Menu></Menu>
      <Index></Index>
      {/* <Administrador></Administrador> */}
      {/* <FormularioProducto></FormularioProducto> */}
      <Footer></Footer>
    </>
  )
}

export default App
