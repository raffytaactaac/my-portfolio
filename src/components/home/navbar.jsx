import { useState } from "react";

const Navbar = () => {

    const [hamburger, setHamburger] = useState(false);

    const handleNavLink = () => {
        setHamburger(!hamburger)
    }

    return ( 
        <div>
            <nav className="flex justify-between items-center px-10 py-5 text-white">
                <div className="brand">
                    <p className="text-5xl font-bold logo">RAFFY</p>
                </div>
                <ul className={hamburger ? "flex gap-10 link-container" : "flex gap-10 link-container hide-links"}>
                    <li><a href="#" className="text-lg">Home</a></li>
                    <li><a href="#about" className="text-lg">About</a></li>
                    <li><a href="#projects" className="text-lg">Projects</a></li>
                    <li><a href="#contact" className="text-lg">Contact</a></li>
                </ul>
                <button onClick={handleNavLink}><i className="fa-solid fa-bars text-4xl"></i></button>
                <div className={hamburger ? "bubble" : "hide-bubble"}></div>
            </nav>
        </div>
     );
}
 
export default Navbar;