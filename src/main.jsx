
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalState from './components/contextApi/index.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <GlobalState>
         <App />
    </GlobalState>      
    </BrowserRouter>
 

)
