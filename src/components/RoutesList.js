import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage"
import ContactPage from "../pages/ContactPage"
import AboutPage from "../pages/AboutPage"
import NotFoundPage from "../pages/NotFoundPage"
import UsersPage from "../pages/UsersPage"

const RoutesList = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/users/:username" element={<UsersPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>  {/* None of the above*/}
    </Routes>
  )
}

export default RoutesList