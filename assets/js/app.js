

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




let carritoDeCompras = []


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

mostrarProductos(stockProductos)

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
                        </div> `;
    const botonVerDetalle = document.createElement("button");
    botonVerDetalle.innerText = "Ver Detalle";
    botonVerDetalle.addEventListener("click", () => {
        mostrarDetalle(producto);
        crearBotonVolver();
    })

    div.appendChild(botonVerDetalle)
    contenedorProductos.appendChild(div)
    // mostrarProductos()

    })

}

function crearBotonVolver(){
  const botonVolver = document.createElement("button");
  botonVolver.classList.add("boton-volver");
  botonVolver.innerText = "Atras";
  botonVolver.addEventListener("click", () => {
    mostrarProductos(productos);
  }
  )
  document.getElementById("contenedor-de-peliculas").prepend(botonVolver);
}

mostrarProductos(productos);
    
//     let btnAgregar = document.getElementById(`boton${el.id}`)
//     console.log(btnAgregar);
// //     btnAgregar.addEventListener('click',()=>{
//         console.log(el.id);
//     //     agregarAlCarrito(el.id);



