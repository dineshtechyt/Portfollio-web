import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
const App = () => {
  return (
    <>
      {/* <h1>hii</h1> */}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/services"} element={<Services />} />
      </Routes>
    </>
  );
};

export default App;
