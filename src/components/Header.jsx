import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='header'>
        <div>
            <h2>To Do App TECHNO GLOBAL</h2>
        </div>
        <article>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/login"}>Login</Link>
            {/* <button className='btn'>Login</button> */}
        </article>
    </nav>
  )
}

export default Header