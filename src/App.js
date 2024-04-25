import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/home';
import Video from './Pages/Video/Video';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [menuClass, setMenuClass] =useState("close")
  return (
    <div>
      <Navbar menuClass={menuClass} setMenuClass={setMenuClass}></Navbar> 
      <Routes>
        <Route path="/" element = {<Home menuClass={menuClass}></Home>}></Route>
        <Route path = "/video/:categoryId/:videoId" element = {<Video></Video>}></Route>
      </Routes>
    </div>
  );
}

export default App;
