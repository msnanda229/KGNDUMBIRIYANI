import React from "react";
import Header from "./frontend/Header";
import Banner from "./frontend/Banner";
import Menu from "./frontend/Menu";
import About from "./frontend/About"; 
import Contact from "./frontend/Contact"; 
import Footer from "./frontend/Footer";
import './App.css'
function App() {
  console.log("App rendering");
  return (
    <div>
      <Header />
      <Banner />
      <Menu />
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;