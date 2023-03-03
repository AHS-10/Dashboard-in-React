import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from '../Components/Dashboard';
import About from '../Components/About';
import Contact from '../Components/Contact';
import PagenotFound from '../Components/PagenotFound';
import Login from '../Components/Auth/Login';
import Signup from '../Components/Auth/Signup';
import ProtectedRoutes from './ProtectedRoutes';

function Router() {
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='signup' element={<Signup/>} />
            <Route path='dashboard/*'  element={<ProtectedRoutes Component={ Dashboard }/>}/>
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='/*' element={<PagenotFound/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;