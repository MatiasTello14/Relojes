const productos = [
    {id: "1", nombre: "SmartWatch Nitcom Nt02 Smartband", precio: 1900, img: "../img/NT02-1-1.jpg", caracteristica: "El Smartwatch Nictom NT02 cuenta con una pantalla OLED de bajo consumo y la duración de la batería es de 2 a 5 días dependiendo su uso. Compatible con Android e iOS, permite recibir notificaciones de mensajes de WhatsApp y llamadas entrantes. Además, es resistente a la sudoración y salpicaduras." ,idCat:"2"},
    {id: "2", nombre: "SmartWatch Skemi 1250", precio: 2500, img: "../img/SKMEI1250-1.jpg",caracteristica:"El SmartWatch SKMEI 1250 es un reloj deportivo de diseño funcional. Ideal para quienes son amantes del deporte, entre sus principales funciones, se encuentran: contador de pasos, de calorías, recordatorio de llamada, medidor de distancia y cámara remota. Es sumergible hasta 50 Mts y no necesita cargar, ya que usa batería." ,idCat:"2"},
    {id: "3", nombre: "SmartWatch Y11,2", precio: 3250, img: "../img/Y11,2.jpg", caracteristica:"Con la más variada gama de colores, este reloj cuenta con un diseño súper moderno y resistente para el uso diario. Cuenta con las principales funciones para llevar una vida sana y plena, pudiendo acceder a todas sus funciones de manera ágil y rápida gracias a su pantalla touch de 1,2." ,idCat:"3"},
    {id: "4", nombre: "SmartWatch AMAZFIT GTS2 MINI", precio: 3250, img: "../img/AMAZFIT GTS2.jpg",caracteristica:"El Amazfit GTR 3 incluye 12 modos de deportes distintos, como andar, nadar, escalar, correr por la montaña o esquí. Su gran pantalla AMOLED de alta definición con una densidad de píxeles de 326 ppp es clara y vívida, ya sea para ver la hora o consultar cualquiera de tus aplicaciones favoritas. Aparte de todas sus funciones alucinantes, el Amazfit GTR 3 es un reloj espectacular que te permite controlar el tiempo con total seguridad." ,idCat:"3"}
]


export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            resolve(productos)
        }, 100) 
    })
}

//Creamos una nueva función similar pero que nos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}