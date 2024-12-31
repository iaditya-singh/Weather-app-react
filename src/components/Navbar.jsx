import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <>

    <div className="navbar">    <ul>
    <li><Link to='/' >Home</Link></li>
<li><Link to='/indore'>Indore </Link></li>
<li><Link to='/bhopal' >Bhopal </Link></li>
<li> <Link to='/pune'> Pune</Link></li>
<li><Link to='/mumbai'>Mumbai</Link></li>
<li><Link to='/banglore'>Banglore</Link></li>

    </ul>  </div>
  

    </>
  )
}

export default Navbar