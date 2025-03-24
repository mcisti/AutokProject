import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar({ theme, setTheme }) {
  const location = useLocation();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <h1 className="navbar-brand">Főoldal</h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => "nav-link mx-2" + (isActive ? " active" : "")}
              >
                Autók
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/newcar"
                className={({ isActive }) => "nav-link mx-2" + (isActive ? " active" : "")}
              >
                Új hírdetés
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/hirdeteseim" className={({ isActive }) => "nav-link mx-2" + (isActive ? " active" : "")}>
                Hírdetéseim
              </NavLink>
            </li>
          </ul>

          <form className="d-flex align-items-center me-3" role="search">
            <input
              className={`form-control me-2 ${
                theme === "dark"
                  ? "bg-dark text-white border-light"
                  : "bg-light text-dark border-dark"
              }`}
              type="search"
              placeholder="Pl.: Audi, BMW"
              aria-label="Keresés"
            />
            <button
              className={`btn ${
                theme === "dark" ? "btn-outline-light" : "btn-outline-dark"
              }`}
              type="submit"
            >
              Keres
            </button>
          </form>

          <button className="btn me-2" onClick={toggleTheme}>
            {theme === "dark" ? "🌞" : "🌙"}
          </button>

          <NavLink to="/login" className="btn">
            <i
              className={`bi bi-person-circle ${
                theme === "dark" ? "icon-light" : "icon-dark"
              }`}
            ></i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
