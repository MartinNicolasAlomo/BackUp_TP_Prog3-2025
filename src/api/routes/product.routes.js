import { Router } from "express";
import { validateID } from "../middlewares/middlewares.js";
import { removeProduct, getAllProducts, getProductByID } from "../controllers/product.controllers.js";


const router = Router();


//  GET PRODUCTS
router.get("/", getAllProducts );



//  GET PRODCUTS  by  ID
router.get("/:id", validateID, getProductByID);


/*
dividir la logica

routes -archivo escpecifico de rutas

controller - quiero gestiona las peticions y respuestas del usuario
logica para maneja peticiones e clientes.  coordina rutas modelos y respuesas
middlewares - 

database - 

models - quiero buscar las peticiones a base de satos
feineestrucuta de rdaots y como intectua con DB



*/


//  DELETE PRODCUTS  by  ID
router.delete("/:id", validateID, removeProduct);



export default router;