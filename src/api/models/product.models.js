import connection from "../database/db.js";



const selectAllProducts = async () => {
    let sql = `SELECT * FROM productos`;
    return await connection.query(sql);
}

const selectProductByID = async (id) => {
    let sql = `SELECT * FROM productos where id = ?`;
    return await connection.query(sql, [id]);
}

const deleteProduct = async (id) => {
    let sql = `DELETE FROM productos WHERE id = ?`;
    return await connection.query(sql, [id]);

}

const insertarProducto = async(id,nombre,precio,imagen,categorias,activo) => {
    let cadSql = "insert into productos (id,nombre,precio,imagen,categoria,activo) value (?,?,?,?,?,?)";

    return await connection.query(cadSql,[id,nombre,precio,imagen,categorias,activo]);
}

const actualizarProducto = async(nombre,precio,img,categorias,activo,id) =>{
    let cadSql = "update productos set nombre = ?,precio = ?,imagen =? ,categoria = ? ,activo = ? where id = ?";
    return await connection.query(cadSql,[nombre,precio,img,categorias,activo,id]);
}

const actualizarEstadoActivo = async (id, activo) => {
    const sql = "UPDATE productos SET activo = ? WHERE id = ?";
    return await connection.query(sql, [activo, id]);
};




export default {
    selectAllProducts,
    selectProductByID,
    deleteProduct,
    actualizarProducto,
    insertarProducto,
    actualizarEstadoActivo
}