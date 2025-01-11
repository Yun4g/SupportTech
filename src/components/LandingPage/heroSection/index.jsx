import CompanyIcon from '/src/images/logo2.png'
import Landingillustration from '/src/images/Landingillustration.png'
import HamburgerMenu from '../../hamburgerMenu'









function HeroSction() {




    return(
         <section className=' lg:flex lg:h-[80vh]  justify-center   '>
           <div className={` block lg:hidden z-50  p-3   w-full absolute top-20 left-0 overflow-x-hidden`}>
                         <HamburgerMenu />
           </div>

            <div className=' lg:w-3/4 xl:w-[40%] ' >
                
              <h1 className=' sm:text-3xl md:text-5xl text-start font-semibold leading-tight text-customBlue'>Ultimate support system for leading agencies</h1>
              <p className=' mt-4 text-customBlue text-start md:text-lg'>Get your tests delivered at let home collect sample from the victory of the managments that supplies best
              design system guidelines ever.</p>

              <div className=' text-start mt-5'>
                <input type="email" placeholder='Enter Email address' className=' ps-7 shadow shadow-slate-200 pl  h-12 md:h-14 w-full md:w-7/12 rounded-md' name="email" id="" />
                <button className=" bg-customBTNorange mt-4 md:mt-0 md:ms-3 h-12 md:h-14 rounded-md  w-32 text-white">
                      Get started
                </button>

                <p className=' mt-6 md:flex gap-3 text-slate-400'>Sponsored by:   <span><img src={CompanyIcon} width={'320px'} alt="" /></span></p>
              </div>
            </div>

            <div className=' mt-20 lg:mt-0 flex justify-center  xl:w-[56%] '>
                <img src={Landingillustration} className='  lg:mt-0 md:w-[56%]  lg:w-[80%] h-[320px] lg:h-[420px]' alt="" />
            </div>
         </section>
    )     
}


export default HeroSction