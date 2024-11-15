import React from 'react';
import './App.css';
// import Login from './components/Login/Login';

// import Iraqculturelocal from './components/Iraqculturelocal/Iraqculturelocal'
import Iconpersonal from './components/iconpersonal/Iconpersonal'

// import { Route, Routes } from 'react-router-dom';
// import Home from './components/Home/Home';  

// import ZainabHom from './components/zainabcompones/ZainabHom';
// import Comp1Bookpage from './components/zainabcomp1booking/Comp1Bookpage';
// import Comp2Bookpage from './components/zainabcomp2booking/Comp2booking';
// import Comp3bookpage from './components/zainabcomp3book/Comp3booking';



function App() {
  return (
    <div>
      {/* { <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path="/Iraqculturelocal" element={<Iraqculturelocal />} />

        <Route path="/components" element={<ZainabHom/>} />  
        <Route path="/Comp1Bookpage" element={<Comp1Bookpage/>} /> 
        <Route path="/Comp2Bookpage" element={<Comp2Bookpage/>} /> 
        <Route path="/Comp3bookpage" element={<Comp3bookpage/>} /> 
      

       
      </Routes> } */}
      {/* <Iraqculturelocal/> */}
      {/* <Login/> */}
      <Iconpersonal/>

    </div>
  );
}

export default App;
