import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './index.css';


  


const App = () => {

  
 



  return (
    <BrowserRouter>
        <div>

            <HomePage />
            <AboutPage />
        
        

      
      
        </div>
    </BrowserRouter>

  )
}

export default App
