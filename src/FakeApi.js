import gow from './images/items/gow.jpg'
import fifa22 from './images/items/fifa22.jpg'
import eldenring from './images/items/eldenring.jpg'
import granturismo7 from './images/items/granturismo7.jpg'


const listaProductos=[
    {
        id:1,
        title: 'God of War',
        price:6800,
        pictureURL:gow,
        description: 'God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por Sony Interactive Entertainment.'
    },
    {
        id:2,
        title: 'FIFA 22',
        price:6200,
        pictureURL:fifa22,
        description: 'FIFA 22 es un videojuego desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports.'
    },
    {
        id:3,
        title: 'Elden Ring',
        price:9000,
        pictureURL:eldenring,
        description:'Elden Ring es un videojuego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment'
    },
    {
        id:4,
        title: 'Gran Turismo 7',
        price:7000,
        pictureURL:granturismo7,
        description:'Gran Turismo 7 es un videojuego de simulación de carreras de 2022 desarrollado por Polyphony Digital y publicado por Sony Interactive Entertainment.'
    }
    
]

export const getProductos = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve(listaProductos)
    },2000);
  });