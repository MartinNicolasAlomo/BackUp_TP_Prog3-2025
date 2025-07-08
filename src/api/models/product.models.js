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

const insertarProducto = async(codigo,nombre,precio,img,categorias,activo) => {
    let cadSql = "insert into productos (codigo,nombre,precio,img,categoria,activo) value (?,?,?,?,?,?)";

    return await connection.query(cadSql,[codigo,nombre,precio,img,categorias,activo]);
}

const actualizarProducto = async(nombre,precio,img,categorias,activo,id) =>{
    let cadSql = "update productos set nombre = ?,precio = ?,imagen =? ,categoria = ? ,activo = ? where id = ?";
    return await connection.query(cadSql,[nombre,precio,img,categorias,activo,id]);
}
export default {
    selectAllProducts,
    selectProductByID,
    deleteProduct,
    actualizarProducto,
    insertarProducto
}