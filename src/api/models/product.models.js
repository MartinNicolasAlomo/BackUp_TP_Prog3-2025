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
    let cadSql = "insert into producto (codigo,nombre,precio,img,categoria,activo) value (?,?,?,?,?,?)";

    return await conn.query(cadSql,[codigo,nombre,precio,img,categorias,activo]);
}

const actualizarProducto = async(nombre,precio,img,categorias,activo,codigo) =>{
    let cadSql = "update producto set nombre = ?,precio = ?,img =? ,categoria = ? ,activo = ? where codigo = ?";
    return await conn.query(cadSql,[nombre,precio,img,categorias,activo,codigo]);
}
export default {
    selectAllProducts,
    selectProductByID,
    deleteProduct,
    actualizarProducto,
    insertarProducto
}