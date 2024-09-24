import {Navbar , Container, Nav} from "react-bootstrap"

const Menu = () => {
    return (
        <section >
            <Navbar expand="lg" className="bg-primary" data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href="#home">Libreria101</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Administrador</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </section>
    );
};

export default Menu;