export const Footer = () => {
    return (
        <footer className="w-full mt-24 bg-marron-oscuro text-white">

            <div className="max-w-6xl mx-auto px-6 py-5 grid md:grid-cols-3 gap-5 font-light">

                {/* Logo + Descripción */}
                <div className="flex flex-col gap-4">
                    <img
                        src="/images/favicon.png"
                        alt="Logo Pollería"
                        className="w-24"
                    />

                </div>

                {/* Información de contacto */}
                <div className="flex flex-col gap-3 text-sm">
                    <h3 className="font-semibold text-lg">Contacto</h3>
                    <p>📍 La Escondida, Pilar, Buenos Aires</p>
                    <p>📞 11 7141 6222</p>
                    <p>🕒 Lunes a Domingos hasta las 21:00</p>
                </div>

                {/* Mapa */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">
                        Dónde encontrarnos
                    </h3>

                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3287.936307178655!2d-58.86341962426403!3d-34.50449897298997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDMwJzE2LjIiUyA1OMKwNTEnMzkuMCJX!5e0!3m2!1ses!2sar!4v1771557492502!5m2!1ses!2sar"
                            className="w-full h-48"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>

            {/* Línea inferior */}
            <div className="border-t border-white/20 text-center text-xs py-4 opacity-80">
                © {new Date().getFullYear()} Ho`ysa — Todos los derechos reservados
            </div>
        </footer>
    )
}
