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


export default {
    selectAllProducts,
    selectProductByID,
    deleteProduct
}