import type { Product } from "../types/product.entity"

export const products: Product[] = [{
    id: 2,
    nombre: "carne-picada",
    precio: 3000,
    oferta: "2kg 5000",
    img: "images/carne-picada.webp",
    stock: "agotado",
    venta: "kilo",
    tipo: "pollo"
},
{
    id: 3,
    nombre: "chupachups",
    precio: 300,
    oferta: "8 x 2000",
    img: "images/chupachups.jpg",
    stock: "Disponible",
    venta: "unidad",
    tipo: "chupachups"
},
{
    id: 1,
    nombre: "pollo-trozado",
    precio: 3400,
    oferta: false,
    img: "images/pollo-trozado.jpg",
    stock: "disponible",
    venta: "kilo",
    tipo: "pollo"
},
{
    id: 4,
    nombre: "pollo-entero",
    precio: 3800,
    oferta: false,
    img: "images/Pollo-entero.jpg",
    stock: "disponible",
    venta: "kilo",
    tipo: "pollo"
},
{
    id: 4,
    nombre: "huevo",
    precio: 5000,
    oferta: "Dos maples x 9000",
    img: "images/maple-huevo.webp",
    stock: "disponible",
    venta: "maple",
    tipo: "granja"
},
{
    id: 4,
    nombre: "zanahoria",
    precio: 1000,
    oferta: false,
    img: "images/zanahoria.jpg",
    stock: "disponible",
    venta: "kilo",
    tipo: "granja"
},
{
    id: 4,
    nombre: "papa",
    precio: 900,
    oferta: false,
    img: "images/papa.jpg",
    stock: "disponible",
    venta: "kilo",
    tipo: "granja"
},
{
    id: 4,
    nombre: "pata-y-muslo",
    precio: 3400,
    oferta: false,
    img: "images/Pata-muslo.jpg",
    stock: "agotado",
    venta: "kilo",
    tipo: "pollo"
},
{
    id: 4,
    nombre: "pechuga",
    precio: 3800,
    oferta: false,
    img: "images/pechuga.jpg",
    stock: "agotado",
    venta: "kilo",
    tipo: "pollo"
},
{
    id: 4,
    nombre: "cebolla",
    precio: 800,
    oferta: "Dos kilos 1500",
    img: "images/cebolla.jpg",
    stock: "disponible",
    venta: "kilo",
    tipo: "granja"
}

]