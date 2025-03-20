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
            id: Number(document.getElementById("id").value),
            hirdeto: document.getElementById("hirdeto").value,
            marka: document.getElementById("marka").value,
            tipus: document.getElementById("tipus").value,
            evjarat: Number(document.getElementById("evjarat").value),
            kilometer: Number(document.getElementById("kilometer").value),
            szin: document.getElementById("szin").value,
            motorTipus: document.getElementById("motorTipus").value,
            motorMeret: Number(document.getElementById("motorMeret").value),
            teljesitmeny: Number(document.getElementById("teljesitmeny").value),
            sebessegvalto: document.getElementById("sebessegvalto").value,
            ar: Number(document.getElementById("ar").value),
            allapot: document.getElementById("allapot").value,
            felszereltseg: document.getElementById("felszereltseg").value,
            muszakiVizsga: document.getElementById("muszakiVizsga").value,
            elojel: document.getElementById("elojel").value,
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
            <label htmlFor="id" className="form-label">Id</label>
            <input type="number" className="form-control" id="id" defaultValue={data.id}/>
        </div>
        <div className="mb-3">
            <label htmlFor="hirdeto" className="form-label">Hírdető</label>
            <input type="text" className="form-control" id="hirdeto"  defaultValue={data.hirdeto}/>
        </div>
        <div className="mb-3">
            <label htmlFor="marka" className="form-label">Márka</label>
            <input type="text" className="form-control" id="marka" defaultValue={data.marka}/>
        </div>
        <div className="mb-3">
            <label htmlFor="tipus" className="form-label">Típus</label>
            <input type="text" className="form-control" id="tipus" defaultValue={data.tipus}/>
        </div>
        <div className="mb-3">
            <label htmlFor="evjarat" className="form-label">Évjárat</label>
            <input type="number" className="form-control" id="evjarat" defaultValue={data.evjarat}/>
        </div>
        <div className="mb-3">
            <label htmlFor="kilometer" className="form-label">Kilométeróra állás</label>
            <input type="number" className="form-control" id="kilometer" defaultValue={data.kilometer}/>
        </div>
        <div className="mb-3">
            <label htmlFor="szin" className="form-label">Szín</label>
            <input type="text" className="form-control" id="szin" defaultValue={data.szin}/>
        </div>
        <div className="mb-3">
            <label htmlFor="motorTipus" className="form-label">Üzemanyag</label>
            <input type="text" className="form-control" id="motorTipus" defaultValue={data.tipus}/>
        </div>
        <div className="mb-3">
            <label htmlFor="motorMeret" className="form-label">Hengerürtartalom</label>
            <input type="number" className="form-control" id="motorMeret" defaultValue={data.motorMeret}/>
        </div>
        <div className="mb-3">
            <label htmlFor="teljesitmeny" className="form-label">teljesitmeny</label>
            <input type="number" className="form-control" id="teljesitmeny" defaultValue={data.teljesitmeny}/>
        </div>
        <div className="mb-3">
            <label htmlFor="sebessegvalto" className="form-label">Sebességváltó</label>
            <input type="text" className="form-control" id="sebessegvalto" defaultValue={data.sebessegvalto}/>
        </div>
        <div className="mb-3">
            <label htmlFor="ar" className="form-label">Ár</label>
            <input type="number" className="form-control" id="ar" defaultValue={data.ar}/>
        </div>
        <div className="mb-3">
            <label htmlFor="allapot" className="form-label">Állapot</label>
            <input type="text" className="form-control" id="allapot" defaultValue={data.allapot}/>
        </div>
        <div className="mb-3">
            <label htmlFor="felszereltseg" className="form-label">Felszereltség</label>
            <input type="text" className="form-control" id="felszereltseg" defaultValue={data.felszereltseg}/>
        </div>
        <div className="mb-3">
            <label htmlFor="muszakiVizsga" className="form-label">Műszaki érvényesség</label>
            <input type="text" className="form-control" id="muszakiVizsga" defaultValue={data.muszakiVizsga}/>
        </div>
        <div className="mb-3">
            <label htmlFor="elojel" className="form-label">Hírdetés tipusa</label>
            <input type="text" className="form-control" id="elojel" defaultValue={data.elojel}/>
        </div>
        <button type="submit" className="btn btn-primary">Film frissítése</button>
    </form>
    </div>
  )
}
