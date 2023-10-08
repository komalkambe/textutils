//import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/about';
function App() {
  const [mode , setMode] = useState('light'); //WHETHER DARK MODE IS ENABLED OR NOT
    
  const toggleMode = () => {
    if(mode === 'light'){
        setMode ('dark');
        document.body.style.backgroundColor = '#264653';
      }
    else{
        setMode('light');
        document.body.style.backgroundColor = 'light';
    }    
  }
  
  
  return (
      <>
      <Navbar title="textutils" mode={mode} toggleMode={toggleMode}/>

      <div className='container my3'>
        <TextForm heading="Enter the text here to analyze" mode={mode} />
       {/* <About/>  */}
      </div>s
      
      </>
      
  );
}

export default App;  
