class producto {
    constructor (id, titulo, descripcion, categoria, imagen){
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.categoria = categoria
        this.imagen = imagen
    }
    verData(){
        console.log(`el suplemento es ${this.tipo}, de la marca ${this.marca} y su precio es ${this.precio}.`)
    }
}
const producto1 = new producto(1,"Mesa ratona","Mesa ratona de melamina", "living", "mesaratona.jpeg")

const producto2 = new producto(2,"Mesa ratona","Mesa ratona de melamina", "living", "mesaratona.jpeg")

const producto3 = new producto(3,"Mesa ratona","Mesa ratona de melamina", "living", "mesaratona.jpeg")

const producto4 = new producto(4,"Mesa ratona","Mesa ratona de melamina", "living", "mesaratona.jpeg")

const producto5 = new producto(5,"Mesa ratona","Mesa ratona de melamina", "living", "mesaratona.jpeg")

const producto6 = new producto(6,"Mesa ratona","Mesa ratona de melamina", "living", "mesaratona.jpeg")

const producto7 = new producto(7,"Mesa ratona","Mesa ratona de melamina", "living", "mesaratona.jpeg")


let tienda =[]
tienda.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7)

let divProductos = document.getElementById("productos")

function verProductos (array){
    divProductos.innerHTML = ""
    array.forEach((producto) => {
        let nuevoProducto = document.createElement("div")
        nuevoProducto.innerHTML =   
        `<div id="${producto.id}" class="card"style="width: 18rem;">
  <img src="./IMG/${producto.imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${producto.titulo}</h5>
    <p class="card-text">${producto.descripcion}</p>
    <p class="card-text">Categoria: ${producto.categoria}</p>
    
</div>`
        
        
        // `<div id="${producto.id}" class="row row-cols-1 row-cols-md-2 g-4 d-flex w-150">
        // <div class="col">
        //   <div class="card">
        //     <img src="./IMG/${producto.imagen}" class="card-img-top" alt=""/>
        //     <div class="card-body">
        //       <h5 class="card-title">${producto.titulo}</h5>
        //       <p class="card-text">
        //       ${producto.descripcion}
        //       </p>
        //       <p class="card-text">
        //       Categoria: ${producto.categoria}
        //       </p>
        //     </div>
        //   </div>
        // </div>`
                           
        divProductos.append(nuevoProducto)

    })
}

//FUNCION PARA BUSQUEDA DE PRODUCTOS

// let h2Busqueda = document.getElementById("h2Busqueda")
// function busquedaFiltrada (){
//         let buscarProducto = document.getElementById("inputBuscar")
//         let busqueda = tienda.filter((producto)=> producto.marca.toLowerCase().includes(buscarProducto.value.toLowerCase())
//         || producto.tipo.toLowerCase().includes(buscarProducto.value.toLowerCase()) )
//         if(busqueda.length == 0){
//             h2Busqueda.innerHTML = "SU PRODUCTO NO FUE ENCONTRADO, REVISE NUETRO CATALOGO..."
//             verProductos(tienda)
//         }else{
//             for(let productosEncotrados of busqueda){
//                 h2Busqueda.innerHTML = ""
//                 verProductos(busqueda)
//             }
//         }
//     }

//     btnBuscar = document.getElementById("btnBuscar")
//     btnBuscar.addEventListener("click", ()=>{
//         busquedaFiltrada(tienda)
//     })



verProductos(tienda)