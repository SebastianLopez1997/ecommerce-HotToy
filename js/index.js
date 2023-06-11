// mis productos
const productos = [
    // Para hombres
        {
            id: '001',
            titulo: 'ring hombre',
            imagen: '../img/hombre/masturbador-hombre.jpg',
            categoria: {
                nombre: 'Hombre',
                id: 'Hombre'
            }
        },
        {
            id: 'juguete-02',
            titulo: 'dildo doble',
            imagen: '../img/mujer/double-love-luxury-partner-vibrador-satisfyer-mujer.jpg',
            categoria: {
                nombre: 'Mujer',
                id: 'Mujer'
            }
        },
        {
            id: 'juguete-03',
            titulo: 'dildo simple',
            imagen: '../img/mujer/sastyfayer-mujer.jpg',
            categoria: {
                nombre: 'Mujer',
                id: 'Mujer'
            }
        },
        {
            id: 'juguete-04',
            titulo: 'Bala',
            imagen: '../img/mujer/mini-bala-mujer.jpg',
            categoria: {
                nombre: 'Mujer',
                id: 'Mujer'
            }
        }

]

const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategorias = document.querySelectorAll('.boton-categoria');


function cargarProductos () {
    
    productos.forEach(producto => {
    
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">codigo: ${producto.id} </p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        
        contenedorProductos.append(div);
        
    })
}

cargarProductos();

botonesCategorias.forEach(boton => {
    boton.addEventListener('click', (e) =>{
    
        botonesCategorias.forEach(boton => boton.classList.remove('active'))
        
        e.currentTarget.classList.add('active');
        
    } )
})