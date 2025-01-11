
import Avatar from '../../../images/SectionAvatar.png'
import Arrow from '../../../images/arrowDabo.png'
import chatImg from '../../../images/messengerdabo.png'
import builtApp from '../../../images/builtApp.png'
import bluetick from '../../../images/bluetick.png'
import { Link } from 'react-router-dom'






function SectionTwo() {
    return (
        <section className=" w-full bg h-fit  bg-slate-100  ps-5 pe-5 md:ps-24 md:pe-24 pt-11 md:pt-36  ">
            <div className='lg:flex justify-center gap-7 '>
                <div className='border rounded-md lg:w-1/3 md:flex justify-center gap-4 md:h-52 shadow-lg shadow-gray-400 p-5  '>
                    <div className="images">
                        <img src={Avatar} className=' md:w-36  md:h-14' alt="" />
                    </div>

                    <div>
                        <h1 className='text-customBlue font-semibold text-xl'>Do you need help support</h1>
                        <p className=' mt-5 leading-loose text-customBlue'>Get your website ads tests delivered at let collect sample from the victory of the update managments services.</p>
                    </div>
                    <img src={Arrow} alt="" className=' w-5 h-5' />
                </div>

                <div className='border bg-slate-200 rounded-md mt-5 lg:mt-0 lg:w-1/3 md:flex justify-center gap-4 md:h-52 shadow-lg shadow-gray-400 p-5  '>
                    <div className="images">
                        <img src={Avatar} className=' md:w-36  md:h-14' alt="" />
                    </div>
                    <div>
                        <h1 className='text-customBlue font-semibold text-xl'>Do you need help support</h1>
                        <p className=' mt-5 leading-loose text-customBlue'>Get your website ads tests delivered at let collect sample from the victory of the update managments services.</p>
                    </div>

                    <img src={Arrow} alt="" className=' w-5 h-5' />
                </div>
            </div>


            <div className=' lg:flex justify-center gap-4 mt-8 lg:mt-48'>
                <div className=' lg:mt-4 lg:w-1/2'>
                    <img src={chatImg} alt="" />
                </div>
                <div className=' lg:w-1/2'>
                    <h1 className=' text-2xl md:text-4xl leading-normal font-semibold text-customBlue  lg:w-[478px]'>Meet our premium features
                        that will make you wow</h1>
                    <p className=' mt-6 text-base lg:w-[478px] text-customBlue leading-loose pe-3 '>Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.</p>

                    <div className='border mt-10 bg-slate-200 rounded-md  lg:w-[478px]  flex justify-center gap-4 shadow-lg shadow-gray-400 p-5  '>


                        <div>
                            <h1 className='text-customBlue font-semibold text-xl'>Organize your project content</h1>
                            <p className=' mt-2 leading-loose text-customBlue'>Get your website ads tests delivered at let collect sample from the victory of the managments that supplies best design system which guidelines ever with multiple features.</p>
                        </div>


                    </div>

                    <div className=' mt-8 p-6 lg:w-[478px] rounded-lg flex items-center justify-between bg-slate-300'>
                        <p className='text-customBlue  text-lg'>Copllaborate your multiple team support easily</p>
                        <img src={Arrow} alt="" className=' w-5 h-5' />
                    </div>


                    <div className=' mt-8 p-6 lg:w-[478px] rounded-lg flex justify-between items-center bg-slate-300'>
                        <p className='text-customBlue  text-lg'>Build your team knowledge base system</p>
                        <img src={Arrow} alt="" className=' w-5 h-5' />
                    </div>
                </div>



            </div>


            <div className=' lg:flex flex-row  justify-center w-full   gap-2 mt-32'>
                <div className=' mt-28 lg:w-2/5'>
                    <h1 className=' text-customBlue text-lg md:text-4xl  lg:w-[499px] font-bold leading-snug '>Built in one app to make instant reply with in lowest minutes</h1>

                    <p className='text-customBlue leading-loose  text-sm  md:text-2xl lg:text-xl mt-6'>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>

                    <ul  className=' grid md:grid-cols-2 grid-rows-3 gap-6 w-3/4 mb-5 mt-5'>
                        <li className=' text-sm flex gap-2'> <span><img src={bluetick} alt="bluetick" /></span>Medical and vision        
                         </li>
                             
                        <li className=' text-sm flex gap-2'> <span><img src={bluetick} alt="bluetick" /></span>
                        Life insurance
                        </li>
                        <li className=' text-sm flex gap-2'> <span><img src={bluetick} alt="bluetick" /></span>
                         400(k) savings
                        </li>
                        <li className=' text-sm flex gap-2'> <span><img src={bluetick} alt="bluetick" /></span> HSAs and FSAs</li>
                        <li className=' text-sm flex gap-2'> <span><img src={bluetick} alt="bluetick" /></span> Commuter benefits</li>
                        <li className=' text-sm flex gap-2'> <span><img src={bluetick} alt="bluetick" /></span>529 college savings</li>

                    </ul>
                    
                    <Link className=' text-blue-600 '> Explore more </Link>
                    
                </div>
                <div className='flex justify-center '>
                <div className='mt-5'>
                    <img src={builtApp} alt="" />
                </div>
                </div>
            </div>
        </section>
    )
}


export default SectionTwo