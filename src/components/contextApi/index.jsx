import {  createContext,  useState } from "react"
import PropTypes from "prop-types";


export const GlobalContext = createContext(null);



function GlobalState({children}) {
    const  [showMenu, setShowMenu] = useState(false);

    const TogleMenu = ()=>{
 
        setShowMenu(prev => !prev);
       
    }
    

  return(
    <GlobalContext.Provider value={{showMenu, TogleMenu }}>{children}</GlobalContext.Provider>
  )

}


GlobalState.PropTypes = {
    children : PropTypes.node.isRequired
}



export default GlobalState