import React from "react";
import './App.css';
import { useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Meeting from './pages/Meeting'
import Admin from './pages/Admin'
import Login from "./pages/Login";
function App() {
  const [data, setData] = React.useState({});
  useEffect(() => {
    fetch("/api")//meeting data
      .then((res) => res.json())
      .then((data) => setData(data))
  }, []);
  const [sessionData, setSessionData] = React.useState({});
  useEffect(() => {
    fetch("/sessionApi")//meeting data
      .then((res) => res.json())
      .then((sessionData) => setSessionData(sessionData))
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/meeting' element={<Meeting meetingData={data}/>} />
        <Route path='/admin' element={sessionData !== 'true'   ? <Login /> :<Admin />} />
        <Route path='/login' element={sessionData === 'true'   ? <Admin /> :<Login />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
