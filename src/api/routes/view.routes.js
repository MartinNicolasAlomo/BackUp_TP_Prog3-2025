import { Router } from "express";
import { vistaConsultar, vistaEliminar, vistaIndex } from "../controllers/view.controllers.js";

const router = Router();

router.get("/", vistaIndex);

router.get("/consultar", vistaConsultar);

router.get("/eliminar", vistaEliminar);



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