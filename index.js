
// Variables Js
// Funciones
    function car() {
        const iva = 1.19;
        let producto = prompt(`Ingresa el producto que deseas`);
        let precio;
        precio = parseInt(prompt(`Indicanos el precio del producto`));
        let precioIva = precio * iva;
        let cantidad = parseInt(prompt(`¿Cuantos ${producto} desea llevar?`))
        let productoCar = prompt(`El producto ${producto} tiene un precio de ${precio} y con el iva es ${precioIva}`) 
        let cantidadPrecio = precioIva * cantidad   
        let totalCar = prompt(`El total de los productos mas iva es ${cantidadPrecio} `) 

    }

    let nombre = prompt(`¿Cual es tu Nombre?`)

    saludo (nombre)
    car ()

    function saludo (nombre) { 
        prompt(`Bienvenido a Donde Isolina ${nombre}`)
    }
// Objetos
    const productos = {
        nombre: "Cerveza Escudo",
        precio: 0,
        cantidad: 0
    }

    productos.precio = precio
    productos.cantidad = cantidad
    console.log(productos)
// Arrays y metodos de busqueda y filtrado...
