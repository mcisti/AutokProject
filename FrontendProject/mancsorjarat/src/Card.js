import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ player, get }) {
    function torol() {

        if (window.confirm("Biztosan törölni szeretnéd?")) {
            axios.delete("http://localhost:5150/api/Jarmuvek" + player.id)
                .then(function () {
                    alert("Törölve")
                    get();
                })
        }


    }

    return (
        <div className="card  col-md-3 m-2" style={{ width: "18rem" }}>
            <img className="card-img-top"  alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{player.marka +" "+ player.tipus}</h5>
                <p className="card-text">évjárat: {player.evjarat}|{player.kilometer+"km"}|{player.teljesitmeny+"le"} <br />{player.ar+"ft"}</p>
                <a href={player.profile_url} className="btn btn-dark">wiki</a>
                <Link to={"/Player/" + player.id}>
                    <button className="btn btn-warning"><i class="bi bi-info-circle-fill"></i></button>
                </Link>
                <button className="btn btn-danger" onClick={torol}><i class="bi bi-trash"></i></button>
            </div>
        </div>
    )
}
