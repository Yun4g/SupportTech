import tooglemenu from '/src/images/Group85.png'
import BG from '/src/images/exportBg.png'
 import BG2 from '/src/images/exportBG2.png'








function SectionFour() {
    return(
         <section className=" bg-slate-100 h-fit p-5 pt-20  flex flex-col items-center justify-center ">
               <h1 className='text-customBlue font-semibold text-xl md:text-2xl'>What deal suit you perfect</h1>

               <p className=' text-slate-300 font-medium mt-5 mb-10'>Meet our pricing plan</p>

               <div className='flex mb-9  gap-3 '>
                  <p className='text-customBlue font-semibold'>Monthly Plan</p>
                   <img src={tooglemenu} alt="" />
                  <p className='text-customBlue font-semibold'>Annual Plan</p>
               </div>

               <div className='lg:flex gap-0'>
                  <img src={BG2} className=' w-96' alt="" />
                   <img src={BG} className=' w-96' alt="" />
                  
               </div>
         </section>
    )     
}


export default SectionFour