import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({ car, images, get }) {

  function Delete(id) {
    axios.delete(`${process.env.REACT_APP_URL}/api/Jarmuvek/?id=${id}`)
      .then(function () {
        alert("Sikeres törlés!");
        get();
      })
      .catch(function (error) {
        console.error(error);
        alert("Sikertelen törlés!")
      })
  }


  return (
    <div className='col-md-3 d-flex'>
      <div className="card bg-blur" style={{ width: "18rem" }}>
        <img src={images ? images[0]?.eleresiUt : ""} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{car.marka} {car.tipus}</h5>
          <p className="card-text">Évjárat: {car.evjarat}</p>        
          <Link to={"/car/" + car.id}>
            <button className="btn btn-dark" >Több</button>
          </Link>
          <br/><button className="btn btn-" style={{ marginLeft: "10px" }} onClick={function () {
            if (window.confirm("Biztosan törölni szeretnéd?")) {
              Delete(car.id)
            }
          }}><i className="bi bi-trash3"></i><br /></button>

          <Link to={"/updatecar/" + car.id}>
            <button className="btn btn-"><i className="bi bi-pen"></i></button>
          </Link>

        </div>
      </div>
    </div>
  )
}