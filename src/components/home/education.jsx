import smcc from '../../assets/smcc.jpg'
import kodego from '../../assets/kodego.png'

const Education = () => {
    return ( 
        <div className="mb-20">
            <h2 id="about" className="text-white text-4xl font-semibold mb-3">Education</h2>
            <div className="w-56 h-1 bg-blue-600 m-auto mb-14"></div>

            <div className="w-11/12  m-auto text-white">
                <div className='flex gap-10 mb-10 item-1'>
                    <div className='flex-1 flex justify-end education-image-1'>
                        <img src={smcc} alt="smcc" className='w-3/5 rounded-xl drop-shadow-2xl'/>
                    </div>
                    <div className='flex-1 flex justify-start p-5 education-text-1'>
                        <div>
                            <p className='text-lg font-semibold mb-3'>Saint Michael College of Caraga - Nasipit, ADN</p>
                            <p className='mb-3'>BS in Information Technology</p>
                            <p>2021 - Completed</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-10 flex-row-reverse item-2'>
                    <div className='flex-1 flex justify-start education-image-2'>
                        <img src={kodego} alt="smcc" className='w-3/5 rounded-xl drop-shadow-2xl'/>
                    </div>
                    <div className='flex-1 flex justify-end p-5 education-text-2'>
                        <div>
                            <p className='text-lg font-semibold mb-3 '>KodeGo Bootcamp - Taguig</p>
                            <p className='mb-3'>Full-stack Web Development</p>
                            <p>2023 - Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Education;