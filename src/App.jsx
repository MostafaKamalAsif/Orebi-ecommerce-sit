
import './App.css'

import { Routes,Route } from 'react-router-dom';
import RootLayout from './Components/Layouts/RootLayout';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Shop from './Components/Pages/Shop';
import Contacts from './Components/Pages/Contacts';
import Journal from './Components/Pages/Journal';
import Error from './Components/Pages/Error';

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="journal" element={<Journal/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
   
     </Routes>

    </>
  )
}

export default App
