let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');


const buscador = document.getElementById('search')

const selecProd = document.getElementById("selecProd")

const btn = document.getElementById('btnFinalizar')


let stockProductos = [
    {id: 1, nombre: "Toro1", descripcion:"Campeón", precio: 350000, tipo: "+300000", img: "../img/2.JPG"},
    {id: 2, nombre: "Toro2", descripcion:"Campeón", precio: 350000, tipo: "+300000", img: "../img/IMG_1643.jpg" },
    {id: 3, nombre: "Toro3", descripcion:"Campeón", precio: 350000, tipo: "+300000", img: "../img/3.JPG"},
    {id: 4, nombre: "Toro4", descripcion:"Campeón", precio: 350000, tipo: "+300000", img: "../img/4.JPG" },
    {id: 5, nombre: "Toro5", descripcion:"Campeón", precio: 350000, tipo: "+300000", img: "../img/5.JPG" },
    {id: 6, nombre: "Toro6", descripcion:"Campeón", precio: 350000, tipo: "+300000", img: "../img/8.JPG" },
    {id: 7, nombre: "Toro7", descripcion:"Campeón", precio: 200000, tipo: "-300000", img: "../img/7.JPG" },
    {id: 8, nombre: "Toro8", descripcion:"Campeón", precio: 200000, tipo: "-300000", img: "../img/6.JPG" },
    {id: 9, nombre: "Toro9", descripcion:"Campeón", precio: 200000, tipo: "-300000", img: "../img/9.JPG" },
    {id: 10, nombre: "Ternero", descripcion:"Campeón", precio: 180000, tipo: "ternero", img: "../img/10.JPG" },
    {id: 11, nombre: "Ternero", descripcion:"Campeón", precio: 180000, tipo: "ternero", img: "../img/terneros.JPG" },
    {id: 12, nombre: "Ternero", descripcion:"Campeón", precio: 180000, tipo: "ternero", img: "../img/galeria1.jpg" }
]


//filtro

selecProd.addEventListener('change',()=>{
    console.log(selecProd.value);
    if(selecProd.value == 'all'){
        mostrarProductos(stockProductos)
       
    }else{
        let arrayNuevo = stockProductos.filter(elemento => elemento.tipo === selecProd.value)
        console.log(arrayNuevo);
        mostrarProductos(arrayNuevo)    
    }
    
})

//Buscado

mostrarProductos(stockProductos)

//logica Ecommerce
function mostrarProductos(array){

    contenedorProductos.innerHTML = ""

    array.forEach(el => {
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


//RECONOCE CADA PRODUCTO Y LO MUESTRA

function agregarAlCarrito(id) {

    let productoAgregar = stockProductos.find(obj=>obj.id === id)

    console.log(productoAgregar)
    carritoDeCompras.push(productoAgregar)
    mostrarCarrito(productoAgregar)
    actualizarCarrito()
    

    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
    let productosFromStorage = localStorage.getItem('carrito')
    console.log(typeof productosFromStorage);
    console.log(productosFromStorage);

    let carritoBack = JSON.parse( productosFromStorage )
    console.log(carritoBack);
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


btn.addEventListener('click', () => {

  
    if (carritoDeCompras.length >=1) {

        Swal.fire({
            title: 'Genial!',
            text: 'Haz clickeado el botón!',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    } else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El carrito se encuentra vacio.'
    })
}
})


 
//  JSON y Local Storage

console.log(stockProductos);

let itemsJSON = JSON.stringify(stockProductos)

localStorage.setItem('productos', itemsJSON)

let itemsFromStorage = localStorage.getItem('productos')
console.log(typeof itemsFromStorage);
console.log(itemsFromStorage);

let productosBack = JSON.parse( itemsFromStorage )
console.log(productosBack);





//variables formulario


// const nombres = []
// const telefono = []

// const inputNombre = document.querySelector("#inputNombre")
// const inputTelefono = document.querySelector("#inputTel")

// const btnCargar = document.querySelector("#btnCargar")
// const btnCancelar = document.querySelector("#btnCancelar")
// const btnVer = document.querySelector("#btnVer")


// btnCargar.addEventListener("click", ()=> {
//    nombres.push(inputNombre.value)
//     console.log("Se agregó un nombre nuevo")
//     btnCancelar.click()
//     inputNombre.focus()
// })


// btnCancelar.addEventListener("click", ()=> {
//    console.log("Boton cancelar clickeado")
//    inputNombre.value=""
//    inputTelefono.value=""
// })

// btnVer.addEventListener("click", () => {
//    console.log("Boton ver listado clickeado")
// })


