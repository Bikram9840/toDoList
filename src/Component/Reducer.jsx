import React from 'react'
import { Link } from 'react-router-dom';
let Reducer=()=> {
  return (
    <>
    <nav>
      <Link to="/home"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
    </nav>
    
    </>
  )
}

export default Reducer