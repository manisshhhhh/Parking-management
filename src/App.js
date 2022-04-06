import { Route , Routes } from 'react-router-dom';
import './App.css';
import { useState } from "react";

import Home from './componants/Home';
import Login from './componants/Login';
import Navbar from './componants/Navbar';
import Slotes from './componants/Slotes';

function App() {
  
  return (
   <>
   <Navbar/>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='slotes' element={<Slotes/>}/>
     <Route path='login' element={<Login/>}/>
   </Routes>
   </>
  );
}

export default App;
