import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./Style.css";

function App() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
