const loggerURL = ((req, res, next) =>{
    console.log(`[${new Date().toLocaleString()}] - ${req.method} - ${req.url}`);
    next();
});


/*     MIDDLEWARES DE RUTAS       */

const validateID = (req, res, next) => {
    const id = req.params.id; // o const {id} = req.params
    
    //  si no existe o no es nunmero
    if (!id || isNaN(id)) {
        return res.status(400).json({
            error: "El ID debe ser un numero"
        });
    }

    // convertimos el parametro id a un numero entero de base 10, decimal
    req.id = parseInt(id,10);
    next();
}

export{
    loggerURL,
    validateID
}