let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecTalles = document.getElementById('selecTalles')
const buscador = document.getElementById('search')


let stockProductos = [
    {id: 1, nombre: "Toro", descripcion:"Campeón", precio: 350000, img: "../img/2.JPG"},
    {id: 2, nombre: "Toro", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg" },
    {id: 3, nombre: "Toro", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg"},
    {id: 4, nombre: "Toro", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg" },
    {id: 5, nombre: "Toro", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg" },
    {id: 6, nombre: "Toro", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg" },
    {id: 7, nombre: "Vaca", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg" },
    {id: 8, nombre: "Vaca", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg" },
    {id: 9, nombre: "Vaca", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg" },
    {id: 10, nombre: "Ternero", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg" },
    {id: 11, nombre: "Ternero", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg" },
    {id: 12, nombre: "Ternero", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg" },
]


//OTRA OPCIÖN

// class Productos {
//     constructor(nombre, descripcion, precio,img) {
//         this.nombre = nombre;
//         this.descripcion = descripcion;
//         this.precio = precio;
//         this.img = img;
        
//     }
// }

// const productos = []    

// productos.push(producto1)
// productos.push(producto1)
// productos.push(producto1)
// productos.push(producto1)
// productos.push(producto1)
// productos.push(producto1)
// productos.push(producto1)
// productos.push(producto1)
// productos.push(producto1)
// productos.push(producto1)
// productos.push(producto1)
// productos.push(producto1)



//filtro
selecProd.addEventListener('change',()=>{
    console.log(selecProd.value);
    if(selecProd.value == 'all'){
        mostrarProductos(stockProductos)
    }else{
        let arrayNuevo = stockProductos.filter(elemento => elemento.precio === selecProd.value)
        console.log(arrayNuevo);
        mostrarProductos(arrayNuevo)    
    }
})

// //Buscado

mostrarProductos()

// //logica Ecommerce
function mostrarProductos(){

    contenedorProductos.innerHTML = ""

    stockProductos.forEach(el => {
    let div = document.createElement('div')
    div.className = 'producto'
    // div.setAttribute('class', 'producto')
    // div.classList.add('producto')
    div.innerHTML=  `<div class="card">
                        <img src="${el.img}" class="card-img-top" alt="Toro">
                         <div class="card-body">
                        <h4 class="card-title">${el.nombre}</h4>
                        <h5 class = "card-desc">${el.descripcion}</h5>
                        <p class="card-text">$${el.precio}</p>
                         <a id="boton${el.id}" class="btn btn-primary">Comprar</a>
                         </div> 
                        </div> `


contenedorProductos.appendChild(div)

let btnAgregar = document.getElementById(`boton${el.id}`)
//  console.log(btnAgregar);

 btnAgregar.addEventListener('click',()=>{
    agregarAlCarrito(el.id);
 })

})
}
    // const botonVerDetalle = document.createElement("button");
    // botonVerDetalle.innerText = "Ver Detalle";
    // botonVerDetalle.addEventListener("click", () => {
    //     mostrarDetalle(producto);
    //     crearBotonVolver();

    // })   


    // div.appendChild(botonVerDetalle)
    // contenedorProductos.appendChild(div)
    // // mostrarProductos()
    // })


//RECONOCE CADA PRODUCTO Y LO MUESTRA

function agregarAlCarrito(id) {

    let productoAgregar = stockProductos.find(obj=>obj.id === id)

    console.log(productoAgregar);
    carritoDeCompras.push(productoAgregar);
    mostrarCarrito(productoAgregar);
    actualizarCarrito()
}

//DONDE AGREGAR EL PRODUCTO

 function mostrarCarrito(productoAgregar) {

    let div = document.createElement('div')
     div.setAttribute('class', 'productoEnCarrito')
     div.innerHTML=`<p>${productoAgregar.nombre}</p>
                     <p>Precio: $${productoAgregar.precio}</p>
                    <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`
     contenedorCarrito.appendChild(div)
    

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    btnEliminar.addEventListener('click',()=>{
        btnEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id !== productoAgregar.id)
        console.log(carritoDeCompras);
        actualizarCarrito()
    
})
 }

function actualizarCarrito (){
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.precio, 0 )   //acumulador     
 }

                                                   



// function crearBotonVolver(){
//   const botonVolver = document.createElement("button");
//   botonVolver.classList.add("boton-volver");
//   botonVolver.innerText = "Atras";
//   botonVolver.addEventListener("click", () => {
//     // mostrarProductos(productos);
//   }
//   )
//   document.getElementById("contenedor-de-peliculas").prepend(botonVolver);
// }



 








//  botonComprar.onclick = () => {
//     const productoComprado = productos.find(producto => producto.id === botonComprar.id);
//     carrito.push({ nombre: productoComprado.nombre, precio: productoComprado.precio })
//   }
//   //Agregamos los elementos creados a su elemento contenedor que es divProducto
//  producto.append(imgProducto, nombreProducto, precioProducto, botonComprar);
//   //Le agregamos al contenedor de la tienda cada uno de los divProducto
//   contenedorTienda.append(producto);

//   const mostrarCarrito = () => {

//     for (const producto of carrito) {
//       const nombreProducto = `<h4>Producto : ${producto.nombre}</h4>`
//       const precioProducto = `<h4>Precio : ${producto.precio}</h4>`
//       contenedorCarrito.innerHTML += nombreProducto
//       contenedorCarrito.innerHTML += precioProducto
//     }
  
//     const total = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
//     contenedorCarrito.append(`Total Compra :  ${total}`)
  
//   }
  
//   let botonCarrito = document.getElementById("btnCarrito")
//   botonCarrito.onclick = mostrarCarrito;
  

