const Skill = () => {
    return ( 
        <div className="mb-20">
            <h2 id="about" className="text-white text-4xl font-semibold mb-3">Skills</h2>
            <div className="w-56 h-1 bg-blue-600 m-auto mb-14"></div>

            <div>
                <div className="frontend-container w-96 m-auto p-5">
                    <div className="text-white text-center mb-8">
                        <h3 className="text-xl">Frontend Development</h3>
                    </div>
                    <div className="text-white mb-8">
                        <div className="flex justify-between">
                            <p>HTML</p>
                            <p>90%</p>
                        </div>
                        <div className="w-full h-1 bg-blue-300 rounded-xl">
                            <div className="html-percent h-1 bg-blue-600 rounded-xl"></div>
                        </div>
                    </div>
                    <div className="text-white mb-8">
                        <div className="flex justify-between">
                            <p>CSS</p>
                            <p>90%</p>
                        </div>
                        <div className="w-full h-1 bg-blue-300 rounded-xl">
                            <div className="css-percent h-1 bg-blue-600 rounded-xl"></div>
                        </div>
                    </div>
                    <div className="text-white mb-8">
                        <div className="flex justify-between">
                            <p>JAVASCRIPT</p>
                            <p>70%</p>
                        </div>
                        <div className="w-full h-1 bg-blue-300 rounded-xl">
                            <div className="h-1 bg-blue-600 rounded-xl javascript-percent"></div>
                        </div>
                    </div>
                    <div className="text-white mb-8">
                        <div className="flex justify-between">
                            <p>React</p>
                            <p>70%</p>
                        </div>
                        <div className="w-full h-1 bg-blue-300 rounded-xl">
                            <div className="h-1 bg-blue-600 rounded-xl javascript-percent"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="frontend-container w-96 m-auto p-5">
                    <div className="text-white text-center mb-8">
                        <h3 className="text-xl">Backend Development</h3>
                    </div>
                    <div className="text-white mb-8">
                        <div className="flex justify-between">
                            <p>Node.js</p>
                            <p>60%</p>
                        </div>
                        <div className="w-full h-1 bg-blue-300 rounded-xl">
                            <div className="node-percent h-1 bg-blue-600 rounded-xl"></div>
                        </div>
                    </div>
                    <div className="text-white mb-8">
                        <div className="flex justify-between">
                            <p>Express</p>
                            <p>60%</p>
                        </div>
                        <div className="w-full h-1 bg-blue-300 rounded-xl">
                            <div className="express-percent h-1 bg-blue-600 rounded-xl"></div>
                        </div>
                    </div>
                    <div className="text-white mb-8">
                        <div className="flex justify-between">
                            <p>MySQL</p>
                            <p>70%</p>
                        </div>
                        <div className="w-full h-1 bg-blue-300 rounded-xl">
                            <div className="h-1 bg-blue-600 rounded-xl mysql-percent"></div>
                        </div>
                    </div>
                    <div className="text-white mb-8">
                        <div className="flex justify-between">
                            <p>MongoDB</p>
                            <p>70%</p>
                        </div>
                        <div className="w-full h-1 bg-blue-300 rounded-xl">
                            <div className="h-1 bg-blue-600 rounded-xl react-percent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skill;