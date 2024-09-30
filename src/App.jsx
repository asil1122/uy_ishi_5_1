import React from "react";
import { Header } from "./pages/header";
import { Hero } from "./pages/hero";
import { About } from "./pages/about";
import { Comment } from "./pages/comment";

function App() {
  return (
    <>
      <div className="container">
          <Header/>
          <Hero/>
          <About/>
          <Comment/>
      </div>
    </>
  )
}

export default App
