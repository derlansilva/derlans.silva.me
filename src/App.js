import React from 'react';
//import './App.css';
//import Rotas from './routes';


import './App.css'
import Background from './pages/components/background';
import { Header } from './pages/components/header';
import { Home } from './pages/components/home';
//import Router from './routes';
function App() {
  return (
    <div className="container">
  <Background/>
        <Header/>  
        <h1 className='content'>
          <Home/>
        </h1>
    </div>
  );
}

export default App;
