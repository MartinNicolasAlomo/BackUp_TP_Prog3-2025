import Products from "../models/product.models.js";


export const vistaIndex = async (req, res) => {
    try {
        const respuestaProductos = await Products.selectAllProducts();

        res.render("index", {
            title: "Inicio Dashboard",
            products: respuestaProductos[0]
        });

    } catch (error) {
        console.error("Error obteniendo la información", error.message);
        res.status(500).json({
            error: "Error interno al obtener la infromacion"
        });
    }

}


export const vistaConsultar = (req, res) => {
    res.render("consultar", {
        title: "Consultar producto",
        about: "Consultar un producto por ID"
    });
};


export const vistaEliminar = (req, res) => {
    res.render("eliminar", {
        title: "Eliminar producto",
        about: "Eliminar un producto por ID"
    });
};

export const vistaAgregar = (req, res) => {
    res.render("agregar", {
        title: "Crear producto",
        about: ""
    });
};

export const vistaModificar = (req, res) => {
     res.render("modificar", {
        title: "Modificar producto",
        about: ""
    });
};