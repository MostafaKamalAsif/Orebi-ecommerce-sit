
import './App.css'

import { Routes,Route } from 'react-router-dom';
import RootLayout from './Components/Layouts/RootLayout';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Shop from './Components/Pages/Shop';
import Contacts from './Components/Pages/Contacts';
import Journal from './Components/Pages/Journal';
import Error from './Components/Pages/Error';
import SignUp from './Components/Pages/SignUp';
import Checkout from './Components/Pages/Checkout';


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
        <Route path="sign_up" element={<SignUp/>}/>
        <Route path="checkout" element={<Checkout/>}/>
    

        <Route path='*' element={<Error/>}/>
      </Route>
   
     </Routes>

    </>
  )
}

export default App
