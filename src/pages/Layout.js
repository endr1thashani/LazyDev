import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Routes , Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Services from '../pages/Services/Services'
import Projects from '../pages/Projects/Projects'
import Contact from '../pages/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Layout