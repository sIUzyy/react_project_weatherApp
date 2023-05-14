
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Error from '../components/Error'

import Main from '../pages/Main'
import About from '../pages/About'



const MainRoutes = () => {
  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/about' element={<About/>} />
                <Route path='*' element={<Error/>} />
            </Routes>

                <Footer/>
        </Router>
    
    </>
      )
}

export default MainRoutes