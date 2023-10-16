// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import React, {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  // const [darkmode, setDarkmode] = useState('Enable dark mode');
  const [alert, setAlert] = useState(null)
  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
  }, 1500);
  }
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
      showalert("Darkmode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Darkmode has been disabled","success")
    }
    
  }
  return (
    
      <>  
          <Router>
          <Navbar titles='Dark mode enabalation' mode={mode} togglemode={togglemode}/>

          <Alert alert={alert}/>
          <div className="container">
              <Routes>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/textform" element={<Textform mode={mode} showalert={showalert} />} />
              
              </Routes>
          </div>
          {/* <About/> */}
          </Router>
      </>
  );
}

export default App;
