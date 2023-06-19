const Hero = () => {
    return ( 
        <div className="hero-container flex justify-around items-center mb-5">
            <div className="hero-text">
                <p className="text-white text-5xl font-semibold mb-2 text-header">Hi I am Raffy</p>
                <p className="text-white text-4xl font-semibold mb-2 text-sub-header">I'm a full-stack <span className="hero-sub-text">Web Developer</span></p>
                <p className="text-white mb-5 text-xl text">Building a successful product is a challenge. I am energetic in web development.</p>
                <a href="#" className="text-white bg-purple-600 hover:bg-purple-800 transition duration-300 p-3 rounded-lg">Contact Me</a>
            </div>
            <div className="image-container">
                <img src="src\assets\myPhoto.png" alt="my photo"/>
            </div>
        </div>
     );
}
 
export default Hero;