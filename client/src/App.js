import React from "react";
import './App.css';
import { useState,useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Meeting from './pages/Meeting'
function App() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, []);

  console.log(data)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/meeting' element={<Meeting />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
