/* Incluir en la entrega:
    Variables JS
    Funciones segun proceso a simular
    Objetos JS
    Arrays
    Metodos de busqueda y filtrado sobre el Array */

    //Variables JS
    let producto = prompt(`Ingrese el producto`)
    console.log(producto)
    let addProduct = parseInt(prompt(`añadir cantidad del producto`))
    console.log(`La cantidad añadida de ${producto} es ${addProduct}`)
    if (addProduct >= 1) {
        console.log(`Cantidad de ${producto} disponible, puede continuar con la compra`)
    } else {
        console.log(`Sin stock de ${producto}`)
    }

    //Funciones

    //Objetos

    //Arrays





    // function addCar(){
    //     //instrucciones a ejecutar cuando llamemos esta funcion
    //     let addProduct = parseInt(prompt("añadir cantidad de producto"))
    //     console.log(`La cantidad añadida es ${addProduct}`)
    // }

    // function producto(){
    //     let productoIngresado = prompt("Ingrese el producto")
    //     console.log(`Buscando disponibilidad de ${productoIngresado}`)
    //     addCar()
    // }

    // producto()