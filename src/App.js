import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./Style.css";
import 
{
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} 
from "react-router-dom";
import Singin from "./components/Singin";
import Signup from "./components/Signup";

function App() {
  return (
      <Router>
        <Header/>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Main/>}>

          </Route>
          <Route path="/Signin" element={<Singin/>}>

          </Route>
          <Route path="/Signup" element={<Signup/>}>

          </Route>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
