
// Variables Js
// Funciones
    // function car() {
    //     const iva = 1.19;
    //     let producto = prompt(`Ingresa el producto que deseas`);
    //     let precio;
    //     precio = parseInt(prompt(`Indicanos el precio del producto`));
    //     let precioIva = precio * iva;
    //     let cantidad = parseInt(prompt(`¿Cuantos ${producto} desea llevar?`))
    //     let productoCar = prompt(`El producto ${producto} tiene un precio de ${precio} y con el iva es ${precioIva}`) 
    //     let cantidadPrecio = precioIva * cantidad   
    //     let totalCar = prompt(`El total de los productos mas iva es ${cantidadPrecio} `) 

    // }

    let nombre = prompt(`¿Cual es tu Nombre?`)

    saludo (nombre)
    // car ()

    function saludo (nombre) { 
        prompt(`Bienvenido a Donde Isolina ${nombre}`)
    }
// Objetos

// Arrays y metodos de busqueda y filtrado...

const productos = [
    {nombre: "cerveza escudo", precio: 50},
    {nombre: "cerveza cristal", precio: 50},
    {nombre: "cerveza heineken", precio: 50},
    {nombre: "cerveza stella artois", precio: 50},
];

let carrito = []

let select = prompt(`¿Hola, desea empezar a comprar algun producto?`)

while(select != "si" && select != "no"){
    alert("Por favor, Ingresa si o no")
    select = prompt("Hola, ¿desea comprar, si o no?")
}

if(select == "si") {
    alert("Tenemos la siguiente lista de productos...")
    let listaProductos = productos.map((producto) => producto.nombre + ` ` + producto.precio + `$`);
    alert(listaProductos.join(` - `))
} else if (select == "no"){
    alert(`Gracias por tu visita, Hasta pronto`)
}

while(select != "no"){
    let producto = prompt("Agrega los productos que deseas")
    let precio = 0

    if(producto == "cerveza escudo" || producto == "cerveza cristal" || producto == "cerveza heineken" || producto == "cerveza stella artois"){
        switch(producto) {
            case "cerveza escudo":
                precio = 1000;
                break;
            case "cerveza cristal":
                precio = 1100;
                break;
            case "cerveza heineken":
                precio = 1150;
                break;
            case "cerveza stella artois":
                precio = 1300;
                break;
                default:
                    break;
        }
    let cantidad = parseInt(prompt(`Indique la cantidad que desea llevar`))

        carrito.push({producto, cantidad, precio})
        console.log(carrito)
    } else {
        alert("No disponemos de ese producto")
    }

    select = prompt(`¿Quieres continuar comprando?`)

    while(select === "no"){
        alert("Muchas gracias por preferirnos, Hasta luego")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, cantidad: ${carrito.cantidad}, el total a pagar por producto es ${carritoFinal.cantidad * carritoFinal.precio}`)
        })
        break;
    }
}