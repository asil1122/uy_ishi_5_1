import React from "react";
import { Header } from "./pages/header";
import { Hero } from "./pages/hero";
import { About } from "./pages/about";

function App() {
  return (
    <>
      <div className="container">
          <Header/>
          <Hero/>
          <About/>
      </div>
    </>
  )
}

export default App
