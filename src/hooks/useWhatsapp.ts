export const useWhatsapp = () => {
    const normalizer: Record<string, string> = {
        "chupachups": "Chupachups",
        "pollo-trozado": "Pollo Trozado",
        "carne-picada": "Picada de Pollo",
        "pollo-entero": "Pollo Entero",
        "huevo": "Huevo",
        "zanahoria": "Zanahoria",
        "papa": "Papa",
        "pata-y-muslo": "Pata y muslo",
        "pechuga": "Pechuga",
        "cebolla": "cebolla"

    }
    const contactProduct = (number: string, hasMessage: boolean, product?: string,) => {
        const karina = 541171416222
        const maria = 541161365411
        if (hasMessage && product) {
            const message = (`Hola, quiero pedir ${normalizer[product]}`)
            const url = `https://wa.me/${number == "karina" ? karina : maria}?text=${encodeURIComponent(message)}`;

            window.open(url, "_blank")
        } else {
            const url = `https://wa.me/${number == "karina" ? karina : maria}`;
            console.log(url);
            window.open(url, "_blank")
        }
    }
    return (
        { contactProduct }

    )
}