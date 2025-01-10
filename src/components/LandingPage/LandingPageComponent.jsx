import Footer from "./footer"
import NavBar from "./header"
import HeroSction from "./heroSection"
import SectionFive from "./sectionFive"
import SectionFour from "./sectionFour"
import SectionThree from "./sectionThree"
import SectionTwo from "./sectionTwo"





function LandingPage() {
     



    return (
        <div>
            <header className=" ps-5 pe-5 md:ps-24 md:pe-24 ">
                <NavBar />
            </header>

            <div className=" ps-5 pe-5 md:ps-24 md:pe-24 pt-11 md:pt-36 ">
                <HeroSction />
            </div>
              
             <div  className=" ps-5 pe-5 md:ps-24 md:pe-24 pt-11 md:pt-36 ">
                 <SectionTwo/>  
             </div>
         
             <div>
                 <SectionThree/>
             </div>

             <div>
                 <SectionFour/>
             </div>
             <div>
                 <SectionFive/>
             </div>

             <footer>
                   <Footer/>
             </footer>
        </div>
    )
}


export default LandingPage