import React from 'react'
import { 
    BrowserRouter, 
    Route,
     Routes 
    } from 'react-router-dom'
import Contact from './pages/contacts/contacts';
    
import Home from './pages/home/home'
import Projects from './pages/projects';


export default function Rotas() {
    return (
       
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/contacts" element={<Contact/>}/>
                <Route path="/projects" element={<Projects/>} />
            </Routes>
        </BrowserRouter>
    );
}
