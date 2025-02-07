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
      <a class="navbar-brand" href="#">Főoldal</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Autók</a>
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
      </form>
    </div>
  </div>
</nav>
    )
}
