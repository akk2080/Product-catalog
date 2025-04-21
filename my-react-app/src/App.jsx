import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import NavBar from './NavBar'
import { Details } from './Details'

function App() {
  

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
      
    </>
  )
}

export default App
