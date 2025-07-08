//import express, { json } from "express";
import express from "express";
import environments from "./src/api/config/environments.js";
import cors from "cors";
import { productRoutes, viewRoutes } from "./src/api/routes/index.js";
import { loggerURL } from "./src/api/middlewares/middlewares.js";
import { __dirname, join } from "./src/api/utils/index.js";


const app = express();
const PORT = environments.port;



// Configuramos EJS como motor de plantillas
app.set("view engine", "ejs");

// Le indicamos a la aplicacion desde que ruta va a servir vistas desde raizProyecto/src/views
app.set("views", join(__dirname, "src/views"));

// Middleware para servir archivos estaticos
app.use(express.static(join(__dirname, "src/public")));



//  MIDDLEWARES DE APPLICACION
app.use(express.json()); // MW para parsear el JSON del body en peticoines POST, PUT o PATCH

app.use(cors());    //  Permite todas las solicitudes

app.use(loggerURL);


// MIDDLEWARES DE RUTAS
app.get("/", (req, res) => {
    res.send("Hola mundo");
});

// RUTAS DE PRODUCTOS DE LA API REST
app.use("/api/products", productRoutes);


// RUTAS LAS VISTAS EJS
app.use("/dashboard", viewRoutes);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});