const urlProducts = "http://localhost:3000/api/";
let listaProductos = [];

async function obtenerDatosProductos() {
    try {
        let respuesta = await fetch(`${urlProducts}products`);
        let datos = await respuesta.json();

        /*console.log(datos);
        console.table(datos.payload);*/
        mostrarProductos(datos);
    } catch (error) {
        console.error("Error", error);
    }
}

function mostrarProductos(array) {
    listaProductos = array.payload; // Guardamos el array de productos

    let contenedorPeliculas = document.querySelector(".contenedor-peliculas");
    let contenedorSeries = document.querySelector(".contenedor-series");
    let htmlPeliculas = "";
    let htmlSeries = "";

    listaProductos.forEach(producto => {
        let estadoActividad = producto.activo === 1 ? "Estado: Activo" : "Estado: Inactivo"
        let claseCarta = producto.activo === 1 ? "activo" : "inactivo";
        let claseBoton = producto.activo === 1 ? "activo" : "inactivo";

        let carta = `
                    <div class="carta-producto ${claseCarta}">
                        <div class="contenedor-imagen-producto">
                            <img class="imagen-producto" src="${producto.imagen}" alt="${producto.nombre}">
                        </div>
                        <div class="contenedor-nombre-producto">
                            <h3 class="nombre-producto">${producto.nombre}</h3>
                        </div>
                        <div class="contenedor-id-producto">
                                <p class="id-producto">ID: ${producto.id}</p>
                            </div>
                        <div class="contenedor-precio-producto">
                            <p class="precio-producto">$${producto.precio.toFixed(2)}</p>
                        </div>
                        <div class="contenedor-boton-producto">
                            <button class="boton-estado-actividad ${claseBoton}" data-id="${producto.id}">${estadoActividad}</button>
                        </div>
                    </div>
                `;
        if (producto.categoria === "Película") htmlPeliculas += carta;
        else if (producto.categoria === "Serie") htmlSeries += carta;
    });

    contenedorPeliculas.innerHTML = htmlPeliculas;
    contenedorSeries.innerHTML = htmlSeries;

    document.querySelectorAll(".boton-agregar-producto").forEach(boton => {
        boton.addEventListener("click", function () {
            const id = parseInt(this.dataset.id);
            agregarAlCarrito(id)
        });
    });
    document.querySelectorAll(".imagen-producto").forEach(imagen => {
        imagen.addEventListener("click", function () {
            window.open(imagen.src, '_blank');
        });
    });
}
obtenerDatosProductos();