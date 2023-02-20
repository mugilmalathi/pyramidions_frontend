import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.scss"
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='navbar bg-primary'>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/movie-details'>Store</Link></div>
    </div>
  )
}

export default Navbar
