const urlProducts = "http://localhost:3000/api/";
let formularioObtenerProducto = document.getElementById("formulario-obtener-producto");
let productoEncontrado = document.getElementById("producto-encontrado");

formularioObtenerProducto.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        productoEncontrado.innerHTML = "<p>Cargando producto...</p>"        //  Muestra estado de carga

        //  Extraemos la info de los campos del formulario
        let formData = new FormData(event.target);                          //  Objeto JS especifico de info de formularios HTML 
        let data = Object.fromEntries(formData.entries());                  //  Transformamos el objeto FormData en nun objeto JS normal
        console.log(data);

        //Ahora que obtenemos el objeto con el campo de idProf, vamos a guardarlo en una variable
        let idProd = data.idProd.trim();
        console.log(idProd);
        if (!idProd) {
            throw new Error(`Error en el envio de datos del formulario`)
        }

        let response = await fetch(`${urlProducts}products/${idProd}`);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`)
        }

        let datos = await response.json();
        console.log(datos);
        if (!datos.payload || datos.payload.lenght === 0) {
            throw new Error(`No se encontró el producto solicitado.`)
        }

        let producto = datos.payload[0];                                    //  Guardamos nuestro producto en una variable
        console.log(producto);

        mostrarProducto(producto);
    } catch (error) {
        console.error(`Error al obtener el producto:`, error.message);
        productoEncontrado.innerHTML = `<p>${error.message}</p>`
    }
});

function mostrarProducto(producto) {
    let carta = `
                        <div class="carta-producto">
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
                                <button class="boton-eliminar-producto" data-id="${producto.id}">Eliminar</button>
                            </div>
                        </div>
                    `;
    productoEncontrado.innerHTML = carta;

    let idProd = producto.id;
    let botonEliminarProducto = document.querySelector(".boton-eliminar-producto");

    botonEliminarProducto.addEventListener("click", function (event) {
        event.stopPropagation();
        let confirmacion = confirm("Está seguro/a que desea eliminar el producto?");

        if (confirmacion) eliminarProducto(idProd);
        else alert("Eliminación cancelada");    //  REEMPLAZAR POR TOAST
    });
}
