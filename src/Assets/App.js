import React from "react";
import "./globalStyle.css";
import { BrowserRouter as Router } from "react-router-dom";
import  Routes  from "../components/InitialPage/MenuLeft/routes";
import MenuLeft from '../components/MenuLeft';
import MenuTop from '../components/MenuTop';

function App() {
  return (
    <Router>
      <div className="App">
      <div className='div-menu'>
            <MenuTop/>
            <MenuLeft/>
        </div>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
