import type { Product } from "../types/product.entity"

export const products: Product[] = [{
    id: 1,
    nombre: "Pollo-trozado",
    precio: 3400,
    oferta: false,
    img: "public/pollo-trozado.webp",
    stock: "disponible"

}, {
    id: 2,
    nombre: "Carne-picada",
    precio: 3000,
    oferta: "2kg 5000",
    img: "public/carne-picada.webp",
    stock: "disponible"


},
{
    id: 3,
    nombre: "Chupachups",
    precio: 300,
    oferta: "8 x 2000",
    img: "public/chupachups.jpg",
    stock: "disponible"

},
{
    id: 4,
    nombre: "Pollo-entero",
    precio: 3800,
    oferta: false,
    img: "public/Pollo-entero.jpg",
    stock: "disponible"


}
]