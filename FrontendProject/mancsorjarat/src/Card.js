import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ player, get }) {
    function torol() {

        if (window.confirm("Biztosan törölni szeretnéd?")) {
            axios.delete("https://chess.sulla.hu/chess/" + player.id)
                .then(function () {
                    alert("Törölve")
                    get();
                })
        }


    }

    return (
        <div className="card  col-md-3 m-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={player.image_url} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{player.name}</h5>
                <p className="card-text">Születési dátum: {player.birth_date} <br />Megnyert vb-k: {player.world_ch_won}</p>
                <a href={player.profile_url} className="btn btn-dark">wiki</a>
                <Link to={"/Player/" + player.id}>
                    <button className="btn btn-warning"><i class="bi bi-info-circle-fill"></i></button>
                </Link>
                <button className="btn btn-danger" onClick={torol}><i class="bi bi-trash"></i></button>
            </div>
        </div>
    )
}
