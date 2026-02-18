import type { Product } from "../types/product.entity"

export const products: Product[] = [{
    id: 1,
    nombre: "Pollo-trozado",
    precio: 3400,
    oferta: false,
    img: "chupachups.jpg"

}, {
    id: 2,
    nombre: "Carne-picada",
    precio: 3000,
    oferta: "2kg 5000",
    img: "chupachups.jpg"

},
{
    id: 3,
    nombre: "Chupachups",
    precio: 300,
    oferta: "8 x 2000",
    img: "chupachups.jpg"
},
{
    id: 4,
    nombre: "Pollo-entero",
    precio: 3800,
    oferta: false,
    img: "chupachups.jpg"

}
]