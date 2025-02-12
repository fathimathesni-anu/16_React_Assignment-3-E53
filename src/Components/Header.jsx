import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='header'>
      <h1>welcome to my website</h1>
      <nav>
        <Link to='./Movielist'>Home</Link>
         <Link to='./About'>About</Link>
      </nav>
    </header>
  )
}

export default Header