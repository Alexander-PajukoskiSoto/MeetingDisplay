import React from "react";
import { useState,useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [data, setData] = React.useState([]);//Posts (too far in to rename

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, []);

  console.log(data)
  return (
    <div className="App">
    </div>
  );
}


export default App;
