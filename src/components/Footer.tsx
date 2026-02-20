export const Footer = () => {

    return (
        <div className="w-full mt-30 flex justify-center items-center flex-col     ">
            <div className="flex justify-between w-[80%] items-center bg-marron-claro rounded-t-2xl border-t">
                <div className="w-[40%]">
                    <img src="images/favicon.png" alt="" className="" />
                </div>
                <div className="p-2">
                    <span>Donde encontrarnos:</span>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3287.936307178655!2d-58.86341962426403!3d-34.50449897298997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDMwJzE2LjIiUyA1OMKwNTEnMzkuMCJX!5e0!3m2!1ses!2sar!4v1771557492502!5m2!1ses!2sar"
                        width="md:[200px] xl:300 lg:250 sm:150"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

            </div>
        </div>
    )
}