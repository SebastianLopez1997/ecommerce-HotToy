// mis productos
const productos = [
    // Para hombres
        {
            id: '001',
            titulo: 'ring hombre',
            imagen: '../img/hombre/masturbador-hombre.jpg',
            precio: 5000,
            categoria: {
                nombre: 'Hombre',
                id: 'Hombre'
            }
        },
        {
            id: 'juguete-02',
            titulo: 'dildo doble',
            imagen: '../img/mujer/double-love-luxury-partner-vibrador-satisfyer-mujer.jpg',
            precio: 5000,
            categoria: {
                nombre: 'Mujer',
                id: 'Mujer'
            }
        },
        {
            id: 'juguete-03',
            titulo: 'dildo simple',
            imagen: '../img/mujer/sastyfayer-mujer.jpg',
            precio: 5000,
            categoria: {
                nombre: 'Mujer',
                id: 'Mujer'
            }
        },
        {
            id: 'juguete-04',
            titulo: 'Bala',
            imagen: '../img/mujer/mini-bala-mujer.jpg',
            precio: 5000,
            categoria: {
                nombre: 'Mujer',
                id: 'Mujer'
            }
        }

]

const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategorias = document.querySelectorAll('.boton-categoria');
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.producto-agregar');
const numerito = document.querySelector('#numerito');


function cargarProductos (ProductosElegidos) {

    contenedorProductos.innerHTML = "";
    
    ProductosElegidos.forEach(producto => {
    
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">codigo: ${producto.id} </p>
                <p class="producto-precio">Precio: $ ${producto.precio} </p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        
        contenedorProductos.append(div);
        
    })
    
    actualizarBotonesAgregar ();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{
    
        botonesCategorias.forEach(boton => boton.classList.remove('active'))
        
        e.currentTarget.classList.add('active');
        
        
        if(e.currentTarget.id != 'todos'){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerHTML = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerHTML = 'Todos los prodcutos';
            cargarProductos(productos);
        }
        
    } )
})

function actualizarBotonesAgregar () {
    botonesAgregar = document.querySelectorAll('.producto-agregar');
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito )
    } )
    
}

let productosEnCarritos;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");



if(productosEnCarritoLS){
    productosEnCarritos = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else{
    productosEnCarritos = [];
}


function agregarAlCarrito (e) {
    
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if(productosEnCarritos.some(producto => producto.id === idBoton)){
       const index = productosEnCarritos.findIndex(producto => producto.id === idBoton);
       productosEnCarritos[index].cantidad++;
    }else {
    
        productoAgregado.cantidad = 1;
        productosEnCarritos.push(productoAgregado);
    }
    
    actualizarNumerito ();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarritos));
}

function actualizarNumerito () {
    let nuevoNumerito = productosEnCarritos.reduce((acc, producto) => acc + producto.cantidad, 0 );
    
    numerito.innerText = nuevoNumerito;
}