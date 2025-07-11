import { Router } from "express";
import { validateID } from "../middlewares/middlewares.js";
import { removeProduct, getAllProducts, getProductByID, postProducto, putProducto, patchProducto } from "../controllers/product.controllers.js";


const router = Router();


router.get("/", getAllProducts );


router.get("/:id", validateID, getProductByID);


router.delete("/:id", validateID, removeProduct);


router.post("/",postProducto);


router.put("/",putProducto);


router.patch("/:id/activo", patchProducto);



export default router;