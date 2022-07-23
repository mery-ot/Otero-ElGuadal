let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecTalles = document.getElementById('selecTalles')
const buscador = document.getElementById('search')

const selecProd = document.getElementById("selecProd")


let stockProductos = [
    {id: 1, nombre: "Toro1", descripcion:"Campeón", precio: 350000, img: "../img/2.JPG"},
    {id: 2, nombre: "Toro2", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg" },
    {id: 3, nombre: "Toro3", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg"},
    {id: 4, nombre: "Toro4", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg" },
    {id: 5, nombre: "Toro5", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg" },
    {id: 6, nombre: "Toro6", descripcion:"Campeón", precio: 350000, img: "../img/IMG_1643.jpg" },
    {id: 7, nombre: "Vaca1", descripcion:"Campeón", precio: 200000, img: "../img/IMG_1643.jpg" },
    {id: 8, nombre: "Vaca2", descripcion:"Campeón", precio: 200000, img: "../img/IMG_1643.jpg" },
    {id: 9, nombre: "Vaca3", descripcion:"Campeón", precio: 200000, img: "../img/IMG_1643.jpg" },
    {id: 10, nombre: "Ternero1", descripcion:"Campeón", precio: 180000, img: "../img/IMG_1643.jpg" },
    {id: 11, nombre: "Ternero2", descripcion:"Campeón", precio: 180000, img: "../img/IMG_1643.jpg" },
    {id: 12, nombre: "Ternero3", descripcion:"Campeón", precio: 180000, img: "../img/IMG_1643.jpg" },
]


//filtro

selecProd.addEventListener('change',()=>{
    console.log(selecProd.value);
    if(selecProd.value == 'all'){
        mostrarProductos(stockProductos)
       
    }else{
        let arrayNuevo = stockProductos.filter(elemento => elemento.nombre === selecProd.value)
        console.log(arrayNuevo);
        mostrarProductos(arrayNuevo)    
    }
    
})

//Buscado

mostrarProductos()

//logica Ecommerce
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


//RECONOCE CADA PRODUCTO Y LO MUESTRA

function agregarAlCarrito(id) {

    let productoAgregar = stockProductos.find(obj=>obj.id === id)

    console.log(productoAgregar);
    carritoDeCompras.push(productoAgregar);
    mostrarCarrito(productoAgregar);
    actualizarCarrito()
    

    localStorage.setItem('productos', JSON.stringify(carritoDeCompras))
    let productosFromStorage = localStorage.getItem('productos')
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


btnCargar.addEventListener("click", ()=> {
   nombres.push(inputNombre.value)
    console.log("Se agregó un nombre nuevo")
    btnCancelar.click()
})


btnCancelar.addEventListener("click", ()=> {
   console.log("Boton cancelar clickeado")
   inputNombre.value=""
   inputTelefono.value=""
})

btnVer.addEventListener("click", () => {
   console.log("Boton ver listado clickeado")
})


