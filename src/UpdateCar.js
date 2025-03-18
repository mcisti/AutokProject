import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';

export default function UpdateCar() {

    const [data, setData] = useState({});

    const date = new Date();
    const year = date.getFullYear()
    const navigate = useNavigate()
    const params = useParams()

    
    useEffect(() => {
        GetId()
    }, [])

    function Put() {
        axios.put(`${process.env.REACT_APP_URL}/api/Jarmuvek/${params.id}`, 
           {
                id: Number(params.id),
                nev: document.getElementById("nev").value,
                ertekeles: Number(document.getElementById("ertekeles").value),
                kiadasEve: Number(document.getElementById("kiadasEve").value),
                kepneve: document.getElementById("kepneve").value,
            })
        .then(function() {
            navigate("/")
        })
    }

    function GetId() {
      axios.get(`${process.env.REACT_APP_URL}/api/Jarmuvek/${params.id}`)
      .then(response => {
        setData(response.data);
      })
    }

  return (
    <div className='p-5 content bg-whitesmoke text-center'>
        <Navbar/>
        <h1 className="title">{data.name} módosítása:</h1>
    <form onSubmit={function(event) {
        event.preventDefault()
        Put()
    }}>
        <div className="mb-3">
            <label htmlFor="nev" className="form-label">Név</label>
            <input type="text" className="form-control" id="nev" defaultValue={data.name}/>
        </div>
        <div className="mb-3">
            <label htmlFor="ertekeles" className="form-label">Értékelés</label>
            <input type="number" className="form-control" id="ertekeles" min="1" max="5" defaultValue={data.world_ch_won}/>
        </div>
        <div className="mb-3">
            <label htmlFor="kiadasEve" className="form-label">Kiadás éve</label>
            <input type="number" className="form-control" id="kiadasEve" min="1800" max={year} defaultValue={data.kiadasEve}/>
        </div>
        <div className="mb-3">
            <label htmlFor="kepneve" className="form-label">Kép URL</label>
            <input type="text" className="form-control" id="kepneve" defaultValue={data.kepneve}/>
        </div>
        <button type="submit" className="btn btn-primary">Film frissítése</button>
    </form>
    </div>
  )
}
