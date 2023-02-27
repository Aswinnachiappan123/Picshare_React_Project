import React from 'react'
import './Landingpage.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Land from './components/pages/Land'
import Home from './Home'
import Main from './Main'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
import Contact from './components/Contact'
function Landingpage() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Land/>} />
      <Route path='/home' element={<Home/>} />
      <Route path="/crop" element={<Main/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
      </Router>
      </>
  )
}

export default Landingpage
