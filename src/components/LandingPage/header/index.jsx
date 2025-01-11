import logo from '../../../images/logofordabo.png'
import lock from '../../../images/login.png'
import { Link } from 'react-router-dom';
import HamburgerMenu from '../../hamburgerMenu';
import { useContext } from 'react';
import  { GlobalContext } from '../../contextApi';









function NavBar() {
  
const {showMenu, TogleMenu} = useContext(GlobalContext)

    return (
        <nav className='pt-8 flex justify-between'>

            <div className='flex  items-center w-5/6 gap-9 '>
                <img src={logo} alt="Company Logo" />

                <ul className=' hidden xl:flex justify-between items-center gap-10 text-customBlue font-semibold'>
                    <li>
                        <Link to="/">Home</Link> {/* Use 'to' prop for navigation */}
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
                        <Link to="/about">About</Link> {/* Use 'to' prop for navigation */}
                    </li>
                    
                </ul>
                </div>
                <div className='hidden xl:flex gap-4 justify-end  items-center'>
                    <Link to="/login" className='flex gap-3 text-customBlue font-semibold'>
                        <img src={lock} alt="Login Icon" /> Login
                    </Link>
                    <Link to="/get-started" className='h-12 flex justify-center items-center rounded-md bg-customOrange text-customTextOrange font-bold w-32'>
                        Get Started
                    </Link>
                </div>

                <div>
                    <HamburgerMenu/>
                </div>
                <button className='flex items-center  xl:hidden' onClick={TogleMenu}>
                    {
                        showMenu ? (
                            <i className="fa-solid fa-x"></i>
                        ) : (
                            <i className="fa-solid fa-bars"></i>
                        )
                    }
                  
                </button>
            



        </nav>
    )
}


export default NavBar