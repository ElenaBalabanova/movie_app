import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Navigation from './Components/Navigation';

function App() {
  return <div>
    <Navigation />
    <HashRouter>
      <Routes>
        <Route path="/" exact={true} Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
      </Routes>
    </HashRouter>
  </div>
}

export default App;