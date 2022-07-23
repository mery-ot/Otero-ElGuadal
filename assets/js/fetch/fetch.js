// console.log('Fetch');

// const URL = 'https://pokeapi.co/api/v2/pokemon/'

// const listaNombres = (pokemons) => {
//     pokemons.forEach ((p, i) => {
//         console.log(`${i+1} - ${p.name}`);
// })
// }

// fetch (URL)
//     .then( res => res.json() )

//     .then(data => {
//         listaNombres( data.results);
// })


//Fetch a JSON local

console.log('Fetch a JSON local');

const URL = "/assets/js/fetch/data/products.json"

function renderProducts( productos ) {
    productos.forEach( producto => {
        document.write(`<li>${producto.nombre} - precio: ${producto.precio}</li>`)
    });
}


fetch( URL )
    .then( res => res.json() )
    .then( data => { renderProducts( data ) })
    .catch( err => { console.log('Hubo un error: '); } )
    .finally( () => { console.log('Terminó el fetch') } )