import myAboutImage from "../../assets/me.jpeg"

const About = () => {
    return ( 
        <div className="mb-32"> 
            <h2 id="about" className="text-white text-4xl font-semibold mb-3">About Me</h2>
            <div className="w-56 h-1 bg-blue-600 m-auto mb-10"></div>
            <div className="about-container flex gap-16">
                <div className="about-image flex-1  flex justify-end">
                    <img src={myAboutImage} className="w-2/4 rounded-xl" alt="my photo" />
                </div>
                <div className="about-text flex-1 ">
                    <p className="text-white w-3/5 text-xl mb-10">I'm a full-stack web developer who is constantly making and discovering amazing things. I enjoy fusing the realms of logic and creative design to create websites that are appealing, approachable, and user-friendly. Come along with me on the path to success as we change the world together!</p>
                </div>
            </div>
        </div>
     );
}
 
export default About;