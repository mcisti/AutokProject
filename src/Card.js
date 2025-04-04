import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({ car, images, handleDelete, theme, logged }) {

  const userId = localStorage.getItem("userId");
  const isAdmin = localStorage.getItem("role") === "Admin"

  return (
    <div className="card bg-blur" style={{ width: "18rem" }}>
      <img src={images ? images[0]?.eleresiUt : ""} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{car.marka} {car.tipus}</h5>
        <p className="card-text">Évjárat: {car.evjarat}</p>
        <p className="card-text">{car.ar.toLocaleString()} Ft</p>
        <Link to={"/car/" + car.id}>
          <button className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'}`} >Több</button>
        </Link>
        <br />
        {(logged && userId === car.hirdeto) || isAdmin ? (
          <button className="btn btn-" style={{ marginLeft: "10px" }} onClick={function () {
            if (window.confirm("Biztosan törölni szeretnéd?")) {
              handleDelete(car.id)
            }
          }}><i className={`bi bi-trash3 ${theme === 'dark' ? 'icon-light' : 'icon-dark'}`}></i><br /></button>
        ) : null}

        {(logged && (userId === car.hirdeto)) || isAdmin ? (
          <Link to={"/updatecar/" + car.id}>
            <button className="btn btn-"><i className={`bi bi-pen ${theme === 'dark' ? 'icon-light' : 'icon-dark'}`}></i></button>
          </Link>
        ) : null}

      </div>
    </div>
  )
}