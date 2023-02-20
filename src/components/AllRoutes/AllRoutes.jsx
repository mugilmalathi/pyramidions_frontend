import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import MovieDetails from '../Pages/MovieDetails'
import ParticularMovieData from '../Pages/ParticularMovieData'
import SingleMovieData from "../Pages/SingleMovieData"

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie-details' element={<MovieDetails />} />
            <Route path='/movie-particular-details/:id' element={<ParticularMovieData />} />
            <Route path='/movie-details-single/:id' element={<SingleMovieData />} />
        </Routes>
    </div>
  )
}

export default AllRoutes