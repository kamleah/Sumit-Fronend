import React from 'react'
import { Route, Routes } from "react-router-dom";

import About from '../pages/authenticatedPages/About/About'
import Home from '../pages/authenticatedPages/Home/Home'

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default ProjectRoutes