import settingIcon from '/src/images/setting2.png'
import dollarIcon from '/src/images/dollarIcon.png'
import vector from '/src/images/vector.png'
import Gift from '/src/images/Gift.png'
import surface1 from '/src/images/surface1.png'
import  dashboard from '/src/images/socialdashboard.png'



function SectionThree() {
    return (
        <section className=" h-fit ps-2 pe-2 lg:ps-24   bg-bg-purple pt-36">
            <div className=' grid gap-4  lg:gap-0 grid-cols-2 md:grid-cols-5 justify-center  p-2 md:p-0  md:w-full lg:w-4/5 '>
                <div className=" mt-4 md:mt-0 h-20  ">
                    <div className=' h-1/2'>
                        <img src={dollarIcon} alt="" />
                    </div>



                    <div className=' border-t-2 border-t-orange-300 mt-3 flex items-end  h-1/2'>
                        <p className='text-orange-300 '>Budget Overview</p>
                    </div>
                </div>
                <div className=" mt-4 md:mt-0 h-20 ">
                    <div className=' h-1/2'>
                        <img src={settingIcon} alt="" />
                    </div>


                    <div className=' border-t-2 mt-3 flex items-end h-1/2'>
                        <p className=' text-slate-300'>Create & adjust</p>
                    </div>
                </div>
                <div className=" mt-4 md:mt-0 h-20  ">
                    <div className=' h-1/2'>
                        <img src={vector} alt="" />
                    </div>

                    <div className=' border-t-2 mt-3 flex items-end h-1/2'>
                        <p className=' text-slate-300'>View Reports</p>
                    </div>
                </div>
                <div className=" mt-4 md:mt-0 h-20  ">
                    <div className=' h-1/2'>
                        <img src={Gift} alt="" />
                    </div>

                    <div className=' border-t-2  mt-3 flex items-end h-1/2'>
                        <p className=' text-slate-300'>Optimize website</p>
                    </div>
                </div>
                <div className=" mt-4 md:mt-0 h-20  ">
                    <div className=' h-1/2'>
                        <img src={surface1} alt="" />
                    </div>

                    <div className=' border-t-2  mt-3 flex items-end h-1/2'>
                        <p className=' text-slate-300'>Custom Dashboard</p>
                    </div>
                </div>
            </div>
            <div>

                <div className='lg:flex gap-8 w-full lg:h-[90vh] mt-48'>
                    <div className=' mt-20 lg:w-1/3'>
                    <h1 className=' font-semibold text-white leading-snug text-xl md:text-4xl'>
                        Introduce quality feature
                        that boost your website
                        rank & performance
                    </h1>

                    <p className=' text-slate-200 mt-16 leading-loose'>Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents. Get your tests delivered at let home collect sample from the victory of the supplies design system.</p>
                
                    <button className=" bg-customBTNorange  mt-9 h-12 md:h-14 rounded-md  w-32 text-white">
                     More Detail
                    </button>
                </div>
                <div className=' mt-4 lg:mt-0 w-full flex justify-center  lg:p-0   lg:w-[73%] h-96 md:h-full'>
                   <img src={dashboard} className=' md:w-1/2 md:h-1/2 lg:w-full md:h lg:h-full' alt="" />
                </div>
                </div>
            </div>
        </section>
    )
}


export default SectionThree