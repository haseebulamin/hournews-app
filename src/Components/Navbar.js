
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=()=> {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <div className="container-fluid">
    <strong><Link className="navbar-brand ms-3" to="/">Hour<span className='text-danger'>News</span></Link></strong>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link mx-1" aria-current="page" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link mx-1" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link mx-1" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link mx-1" to="/health">Health </Link></li>
        <li className="nav-item"><Link className="nav-link mx-1" to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link mx-1" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link mx-1" to="/technology">Technology</Link></li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar