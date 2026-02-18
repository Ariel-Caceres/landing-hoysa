import type { Product } from "../types/product.entity"

export const products: Product[] = [{
    id: 2,
    nombre: "carne-picada",
    precio: 3000,
    oferta: "2kg 5000",
    img: "images/carne-picada.webp",
    stock: "agotado"

},
{
    id: 3,
    nombre: "chupachups",
    precio: 300,
    oferta: "8 x 2000",
    img: "images/chupachups.jpg",
    stock: "agotado"

},
{
    id: 1,
    nombre: "pollo-trozado",
    precio: 3400,
    oferta: false,
    img: "images/pollo-trozado.jpg",
    stock: "disponible"

},
{
    id: 4,
    nombre: "pollo-entero",
    precio: 3800,
    oferta: false,
    img: "images/Pollo-entero.jpg",
    stock: "disponible"


}
]