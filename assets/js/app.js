const contenedorProductos = document.getElementById('contenedor-productos')

contenedorProductos.innerHTML = ""

    stockProductos.forEach(el => {
    let div = document.createElement('div')
    div.className = 'producto'
    div.innerHTML =  `<div class="card">
                    <img src="${el.img}" class="card-img-top" alt="Toro">
                    <div class="card-body">
                    <h5 class="card-title">${el.nombre}</h5>
                    <p class="card-text">$${el.precio}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                    </div> 
                    </div> `

        contenedorProductos.appendChild(div)
    })
   

// let carritoDeCompras = []

// const contenedorProductos = document.getElementById('contenedor-productos');
// const contenedorCarrito = document.getElementById('carrito-contenedor');

// const botonTerminar = document.getElementById('terminar')
// const finCompra = document.getElementById('fin-compra')

// const contadorCarrito = document.getElementById('contadorCarrito');
// const precioTotal = document.getElementById('precioTotal');

// const selecTalles = document.getElementById('selecTalles')
// const buscador = document.getElementById('search')



//filtro
// selecProd.addEventListener('change',()=>{
//     console.log(selecProd.value);
//     if(selecProd.value == 'all'){
//         mostrarProductos(stockProductos)
//     }else{
//         let arrayNuevo = stockProductos.filter(elemento => elemento.precio === selecProd.value)
//         console.log(arrayNuevo);
//         mostrarProductos(arrayNuevo)    
//     }
// })

// //Buscado

// mostrarProductos(stockProductos)

// //logica Ecommerce
// function mostrarProductos(){

//     contenedorProductos.innerHTML = ""

//     stockProductos.forEach(el => {
//     let div = document.createElement('div')
//     div.className = 'producto'
//     // div.setAttribute('class', 'producto')
//     // div.classList.add('producto')
//     div.innerHTML= `<div class="card">
//                     <img src="img/IMG_1643.JPG" class="card-img-top" alt="Toro">
//                     <div class="card-body">
//                     <h5 class="card-title">Toro</h5>
//                     <p class="card-text">350000</p>
//                     <a href="#" class="btn btn-primary">Comprar</a>
//                     </div> `

//     contenedorProductos.appendChild(div)
    
//     let btnAgregar = document.getElementById(`boton${el.id}`)
//     // console.log(btnAgregar);
//     btnAgregar.addEventListener('click',()=>{
//         agregarAlCarrito(el.id);
//     })

//   })


// }

// function agregarAlCarrito(id) {
//     let productoAgregar = stockProductos.find(obj=> obj.id === id)
//     carritoDeCompras.push(productoAgregar)
//     mostrarCarrito(productoAgregar)
//     actualizarCarrito()
// }

// function mostrarCarrito(productoAgregar) {

//    let div = document.createElement('div')
//     div.setAttribute('class', 'productoEnCarrito')
//     div.innerHTML=`<p>${productoAgregar.nombre}</p>
//                     <p>Precio: $${productoAgregar.precio}</p>
//                     <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`
//     contenedorCarrito.appendChild(div)

//     let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
//     btnEliminar.addEventListener('click',()=>{
//         btnEliminar.parentElement.remove()
//         carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id !== productoAgregar.id)
//         console.log(carritoDeCompras);
//         actualizarCarrito()
//     })
// }


// function  actualizarCarrito (){
//     contadorCarrito.innerText = carritoDeCompras.length
//     precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.precio, 0 )   //acumulador     
// }                                                          

