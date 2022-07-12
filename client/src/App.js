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
import Game from "./components/Game";
import Champions from "./components/Champions";
import Players from "./components/Players";

function App() {
  return (
      <Router>
        <Header/>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Main/>}>

          </Route>
          <Route path="/game" element={<Game/>}>
            
          </Route>
          <Route path="/champions" element={<Champions/>}>

          </Route>
          <Route path="/signin" element={<Singin/>}>

          </Route>
          <Route path="/signup" element={<Signup/>}>

          </Route>
          <Route path="/players" element={<Players/>}>

          </Route>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
