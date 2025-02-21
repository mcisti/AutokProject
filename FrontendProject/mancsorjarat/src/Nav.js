import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link class="navbar-brand" to="/">Főoldal</Link>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="#">Autók</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Új hírdetés</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Hírdetéseim</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Pl.: Audi,Bmw" aria-label="Keresés"/>
        <button class="btn btn-outline-success" type="submit">Keres</button>
        <Link to="/login" className="btn btn-"><i class="bi bi-person-circle"></i></Link>
      </form>
    </div>
  </div>
</nav>
    )
}
