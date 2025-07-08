import dotenv from "dotenv";

// carga variables de entonron desde archivo .env
dotenv.config();

export default {
    port: process.env.PORT || 300,
    database: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
}   