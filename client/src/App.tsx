import React, {Fragment, useState} from 'react'
import {Route, Routes} from "react-router-dom";
import './App.css'

import Main from "./pages/Main";
import Login from "./pages/Login";

function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Main />} />
      <Route path={'/login'} element={<Login />} />
    </Routes>
  )
}

export default App