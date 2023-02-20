import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import MovieDetails from '../Pages/MovieDetails'

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie-details' element={<MovieDetails />} />
        </Routes>
    </div>
  )
}

export default AllRoutes