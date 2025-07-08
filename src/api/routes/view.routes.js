import { Router } from "express";
import Products from "../models/product.models.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("index", {
        title: "Inicio Dashboard",
        about: "Listado de Productos"
    });
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


export default router;