import { Link } from 'react-router-dom'
import logo from '/src//images/logo(3).png'




function Footer() {
    return(
         <section className=" bg-footerColor text-center  lg:h-[60vh] flex justify-between gap-3 flex-col  md:p-0">
             
             <div className='flex flex-col justify-center p-2 md:p-0  items-center h-5/6 '>
             <h1 className=' text-white text-2xl md::text-4xl'>Subscribe to get notified about update</h1>
              <p className=' text-slate-400 mt-5'>By subscribing with your mail, you will accept our privacy policy</p>
          <div className='flex flex-col md:flex-row mt-8 gap-3 justify-center items-center'>
          <input type="email" className=' lg:w-96 h-12 md:h-14 rounded-md ps-4 outline-none ' placeholder='Enter Your email' name="email" id="" />
          <button className="  bg-customBTNorange   h-12 md:h-14 rounded-md  w-32 text-white">
               Subscribe
            </button>
          </div>
             </div>
            

          
          <div className=' bg-DarkPurple lg:flex justify-center lg:justify-between items-center lg:ps-36 lg:pe-36 py-4'>
             <div className=' flex flex-col md:flex-row  justify-center  items-center '>
             <img src={logo} alt="" />

                <p className=' text-slate-400'>Copyright by 2019 YourName, Inc</p>
             </div>
             

             <div>
                
                                <ul className=' flex  flex-col lg:flex-row items-center gap-4 mt-7 lg:mt-0 lg:gap-10  text-slate-400 font-semibold'>
                                    <li>
                                        <Link to="/">Home</Link> 
                                    </li>
                                    <li>
                                        <button>
                                            Advertise
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            Support 
                                        </button>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link> 
                                    </li>
                                    
                                </ul>
             </div>

          </div>
         </section>
    )     
}


export default Footer