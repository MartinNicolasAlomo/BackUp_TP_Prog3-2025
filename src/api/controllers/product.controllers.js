// geastiona peticions y respuestas
import Products from "../models/product.models.js"



export const getAllProducts = async (req, res) => {
    try {
        let [rows] = await Products.selectAllProducts();

        res.status(200).json({
            payload: rows,
            message: rows.length === 0 ? "No se encontraron productos" : "Productos encontrados"
        });

    } catch (error) {
        console.error("Error obteniendo productos", error);
        res.status(500).json({
            error: "Error interno del servidor al obtener producto."
        });
    }
};


export const getProductByID = async (req, res) => {
    try {
        let { id } = req.params;
        let [rows] = await Products.selectProductByID(id);

        if (rows.length === 0) {
            return res.status(404).json({
                error: `No se encontró el prodcuto con ID: ${id}`
            })
        }

        res.status(200).json({
            payload: rows
        });

        console.log(rows);

    } catch (error) {
        console.error(`Error obteniendo productos con ID: ${id}`, error.message);
        res.status(500).json({
            error: "Error interno del servidor al obtener un producto por ID."
        });
    }
};





export const removeProduct = async (req, res) => {
    // validate ID
    try {
        let { id } = req.params;

        if (!id) {
            return res.status(400).jdon({
                message: "Se requiere un ID para eliminar un producto"
            })
        }

        let [result] = await Products.deleteProduct(id);

        if (result.affectedRows === 0) {
            return res.status(404), json({
                message: `No se encontró un producto con ID ${id}`
            })
        }

        return res.status(200).json({
            message: `Producto con ID ${id} eliminado correctamente`
        });

    } catch (error) {
        console.error("Error en DELETE /products/:id", error);
        return res.status(500), json({
            message: `Error al eliminar producto con ID ${id}`, error,
            error: error.message
        });
    }
}


export const PostProducto=(req, res) => {
    console.log("POST /altaProducto Body:", req.body);
    let {codigo,nombre,precio,img,categorias,activo} = req.body;
    Products.insertarProducto(codigo,nombre,precio,img,categorias,activo);
    try {
        res.status(201).json({
            success: true,
            message : "Producto agregado correctamente"
        });
    } catch (error) {
        console.error("Error creando producto", error);
        res.status(500).json({
            message: "Error al crear producto"
        });
    }
}

export const putProducto = async(req,res)=>{
    console.log("PUT - Body",req.body);
    const { nombre, precio, img, categorias, activo,codigo } = req.body;
    try {
        await Products.actualizarProducto(nombre,precio,img,categorias,activo,codigo);
         res.status(200).json({
                success: true,
                message : "Producto actualizado"
            })
    } catch (error) {
        console.error("errr",error);
        res.status(500).json({
            success: false,
            message : "Error actualizando producto"
        })
    }
}