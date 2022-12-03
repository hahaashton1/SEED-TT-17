import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./modules/LoginPage";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar.js'; 
import NavBarLogin from './components/NavbarLogin.js'; 
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={         
             <div>
            <NavBarLogin />
            <LoginPage />
            </div>}/>
          <Route path="/dashboard" element ={
            <div>
             <NavBar />
            <Dashboard/>
            </div>
          }/>
        </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
