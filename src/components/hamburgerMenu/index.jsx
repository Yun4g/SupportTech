import { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../contextApi"






function HamburgerMenu() {

       const {showMenu} = useContext(GlobalContext)  


     return(
          <nav className={`bg-white w-full p-3  transition-transform  duration-300 ${showMenu ? ' translate-x-0' : ' translate-x-full'} `} >
             
                             <ul className=' flex flex-col justify-between items-center gap-10 text-customBlue font-semibold'>
                                 <li>
                                     <Link to="/">Home</Link> 
                                 </li>
                                 <li>
                                     <button>
                                         Advertise <span><i className="fa-solid fa-angle-up"></i></span>
                                     </button>
                                 </li>
                                 <li>
                                     <button>
                                         Support <span><i className="fa-solid fa-angle-up"></i></span>
                                     </button>
                                 </li>
                                 <li>
                                     <Link to="/about">About</Link>
                                 </li>
                             
                             </ul>
          </nav> 
     )
}


export default HamburgerMenu