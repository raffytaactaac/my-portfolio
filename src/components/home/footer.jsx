const Footer = () => {
    return ( 
        <div className="footer text-white p-5">
            <div className="footer-container flex justify-around mb-20">
                <a href="#" className="text-4xl font-semibold">RAFFY</a>
                    <ul className="flex gap-10 text-xl">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                <div className="flex gap-5 text-3xl">
                    <a href="https://www.facebook.com/aldintaactaac21"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://github.com/raffytaactaac"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/raffy-taac-taac-40b8a91a1/"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <p className="text-center text-gray-500">&copy; Raffy Taac-Taac. Alrights Reserved</p>
        </div>
     );
}
 
export default Footer;