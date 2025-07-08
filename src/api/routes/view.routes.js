import { Router } from "express";
import { vistaAgregar, vistaConsultar, vistaEliminar, vistaIndex, vistaModificar } from "../controllers/view.controllers.js";

const router = Router();

router.get("/", vistaIndex);

router.get("/consultar", vistaConsultar);

router.get("/eliminar", vistaEliminar);

router.get("/agregar",  vistaAgregar);

router.get("/modificar", vistaModificar);

export default router;