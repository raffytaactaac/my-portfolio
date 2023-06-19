const Contact = () => {
    return ( 
        <div id="contact" className="mb-20">
            <h2 id="about" className="text-white text-4xl font-semibold mb-3">Contact</h2>
            <div className="w-56 h-1 bg-blue-600 m-auto mb-14"></div>
           
            <div className="w-2/5 m-auto text-white">
                <div className="flex  items-center gap-5 mb-10">
                    <div>
                        <i className="fa-solid fa-phone text-4xl text-purple-500"></i>
                    </div>
                    <div className="font-semibold">
                        <h3 className="text-xl">Call Me</h3>
                        <p className="font-normal">+63 932 6711 275</p>
                    </div>
                </div>
                <div className="flex  items-center gap-5 mb-10">
                    <div>
                    <i className="fa-solid fa-envelope text-4xl text-purple-500"></i>
                    </div>
                    <div className="font-semibold">
                        <h3 className="text-xl">Email</h3>
                        <p className="font-normal">raffytaactaac88@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 mb-10">
                    <div>
                    <i className="fa-solid fa-location-dot text-4xl text-purple-500"></i>
                    </div>
                    <div className="font-semibold">
                        <h3 className="text-xl">Location</h3>
                        <p className="font-normal">District-2, Vinapor, Carmen, Agusan del Norte</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;