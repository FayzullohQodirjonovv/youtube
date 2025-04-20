import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/index'
import Navbar from './components/navbar/index'
import Showcase from './components/showcase/index'
import Card from './components/card/index'
import Home from './pages/home/index'
import Explores from './pages/explores/index'
import Login from './pages/login/index'
import Shorts from './pages/shorts/index'
import Substriction from './pages/substriction/index'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Showcase />
            <Card />
            <Home />
          </>
        } />
        <Route path="/explores" element={<Explores />} />
        <Route path='/shorts' element={<Shorts/>}/>
        <Route path='/substriction' element={<Substriction/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}


export default App
