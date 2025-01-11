
import { Route, Routes,  Navigate } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage/LandingPageComponent'



function App() {
   

  return (
        <main className="    bg-customHeroBg" style={{height:'fit-content'}}>
              
            <Routes>
                 <Route path="/" element={<Navigate to="/home" replace />} />
                 <Route path='Home' element={<LandingPage/>}/>
            </Routes>
      

         
        </main> 
  )
}

export default App
