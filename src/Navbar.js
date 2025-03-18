import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <Link to={"/"}>
        <h1 className="navbar-brand" href="#">Főoldal</h1>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}><span className='nav-link mx-2'>Autók</span></Link>
          </li>
          <li className="nav-item">
            <Link to="/newcar" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}><span className='nav-link mx-2'>Új hírdetés</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" aria-disabled="true">Hírdetéseim</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Pl.: Audi,Bmw" aria-label="Keresés" />
          <button className="btn btn-outline-success" type="submit">Keres</button>
          <Link to="/login" className="btn btn-"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
          </svg></Link>
        </form>
      </div>
    </nav>
  )
}
