//import logo from './logo.svg';

import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
  
export default function App() {
  const [mode, setMode]=useState("Light");
  const [alert, setAlert]=useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
     setTimeout(()=>{
       setAlert(null);
    },1500);
    }
  
//settimeout is inbuilt fxn, 1500 means 1.5 sec

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-danger');
  // }

  // const toggleMode=(cls)=>{

  //   removeBodyClasses();
  //   document.body.classList.add('bg-'+cls);
  //   if(mode==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor='#042743';
  //     showAlert("Dark mode has been enabled", "success");
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor='white';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }
  const toggleMode=()=>{

    if(mode==='Light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title="Text Utils-Dark Mode";
      //this is used to flash titles to gain user attention
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing";
      // },2000);
      // setInterval(()=>{
      //   document.title="Install textutils now!";
      // },1500);
    }
    //hun switches di jgah routes okkk let me run 
    else{
      setMode('Light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      document.title="Text Utils-Light Mode";
    }
  }
  return (
    <>
    {/* // <> <Router>
    //     <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    //     <Alert alert={alert}/>
    //     <div className="container">
    //    <Routes>
    //       <Route exact path="/about" element={<About/>}/>
    //       <Route exact path="/" element={ */}
    {/* //       <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>   
    //       }/>
    //       </Routes> */}
    {/* //    </div>  */}
    {/* //    </Router>   */}

        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>   
      
    </>
   
  );
}
  

