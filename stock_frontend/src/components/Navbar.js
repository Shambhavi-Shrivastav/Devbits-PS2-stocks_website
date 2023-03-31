import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Nav'>
            <div className='logo'>
                <a href="/">
                    <img id="logoImage" src='web_logo.png' />
                </a>
                <p className='company'>StockBlock</p>
            </div>

            <div className='navlinks'>
                <Link to="/">Home</Link> <span>|</span>
                <Link to="/About">About</Link> <span>|</span>
                <Link to="/Contact">Contact</Link>
            </div>
            <div className='navlinks'>

                <Link to="/SignIn" className='open_acc'>Sign In</Link> <span>|</span>
                <Link className='open_acc' to="SignUp">Open free account</Link>
            </div>
        </div>
    )
}

export default Navbar
