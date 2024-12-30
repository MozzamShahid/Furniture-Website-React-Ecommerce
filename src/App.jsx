import React from "react";
import './App.css'
import Annoucement from "./components/Annoucement";
import Headers from "./components/Header";
import Hero from "./components/Hero";
import TextSection from "./components/TextSection";
import ProductSection from "./components/ProductSection";
import Catogeries from "./components/Catogeries";
import TextImage from "./components/TextImage";
import FAQ from "./components/FAQ";
import Heros from "./components/Heros";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Annoucement/>
    <Headers/>
    <Hero/>
    <TextSection/>
    <ProductSection/>
    <Catogeries/>
    <TextImage/>
    <FAQ/>
    <Heros/>
    <Footer/>
    </div>
  );
}

export default App;