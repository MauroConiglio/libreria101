import {Button, Table} from "react-bootstrap"
import ItemProducto from "./product/ItemProducto"
const Administrador = () => {
    return (
        <section className="container mainSection">
            <div className="d-flex justify-content-between align-item-center mt-5">
                <h1>Productos Disponibles</h1>
                <Button variant="primary">
                    <i className="bi bi-file-earmark-plus"></i>
                </Button>
                <hr />
                <Table responsive striped bordered hover>
                    <thead>
                        <tr className="text-center">
                            <th>Cod</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>URL de Imagen</th>
                            <th>Categoria</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <ItemProducto></ItemProducto>
                        }
                    </tbody>
                </Table>

            </div>
            
        </section>
    );
};

export default Administrador;