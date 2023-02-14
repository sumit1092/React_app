import { useState } from 'react';
import './App.css';
import About from './My component/About';
import Navbar from './My component/Navbar';
import TextForm from './My component/TextForm';
import React from 'react'
import Alert from './My component/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
 function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert=(msg, type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout( ()=>{
      setAlert(null);
    },1500);
  }
   const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#0f1454';
      showAlert("Dark Mode Enabled","success");
      document.title = 'Converter - Dark Mode'
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled", "success");
      document.title = 'Converter - Light Mode'
    }
  }
  return (
    <> 
    <Router>
    <Navbar title = "Converter" about="ABOUT" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">  
    <Routes>
          <Route exact path="/about" element = { <About mode={mode}/>} />
          <Route exact path="/" element = { <TextForm heading = "Enter Text here" mode={mode} showAlert={showAlert}/>} />
    </Routes>
    </div>
    {/* <About mode={mode}/> */}
    </Router>
    </>
  );
}
export default App;
