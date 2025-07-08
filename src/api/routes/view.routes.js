import { Router } from "express";
import Products from "../models/product.models.js";

const router = Router();

router.get("/", async (req, res) => {
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

});

router.get("/consultar", (req, res) => {
    res.render("consultar", {
        title: "Consultar producto",
        about: "Consultar un producto por ID"
    });
});

router.get("/eliminar", (req, res) => {
    res.render("eliminar", {
        title: "Eliminar producto",
        about: "Eliminar un producto por ID"
    });
});

router.get("/agregar", (req, res) => {
    res.render("agregar", {
        title: "Eliminar producto",
        about: "Eliminar un producto por ID"
    });
});


router.get("/modificar", (req, res) => {
    res.render("modificar", {
        title: "Eliminar producto",
        about: "Eliminar un producto por ID"
    });
});

export default router;