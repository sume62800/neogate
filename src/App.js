import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [mode, setMode] =useState('light');
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ="#1c1818";
      document.title="NEO GATE - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor ="white";
      document.title="NEO GATE";
    }

  }
  return (
  <>
  
  <Navbar title="NEO GATE" mode={mode} toggleMode={toggleMode}/>
  {/*<About mode={mode}/>*/}
  <div className='container'>
  
    {/*<Routes>
  
      <Route exact path="/about" element={} />
      <Route exact path="/" element={} />
  </Routes>*/}
    <Textform heading="Enter The Text Here" mode={mode} />
    
  
        
  </div>

  
  </>

  ); 
}

export default App;
