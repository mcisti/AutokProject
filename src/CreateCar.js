import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

export default function CreateCar() {
    const date = new Date();
    const year = date.getFullYear()
    const navigate = useNavigate()

    function Post() {
        axios.post(`${process.env.REACT_APP_URL}/api/Jarmuvek`, {
            nev: document.getElementById("nev").value,
            ertekeles: Number(document.getElementById("ertekeles").value),
            kiadasEve: Number(document.getElementById("kiadasEve").value),
            kepneve: document.getElementById("kepneve").value,
        })
            .then(function () {
                navigate("/")
            })
    }

    return (
        <div className='p-5 content bg-whitesmoke text-center'>
            <Navbar/>
            <h1 className="title">Új autó felvitele:</h1>
            <form onSubmit={function (event) {
                event.preventDefault()
                Post()
            }}>
                <div className='form-group row pb-3'>
                    <label htmlFor="nev" className='col-sm-3 col-form-label'>Név</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="nev" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="ertekeles" className='col-sm-3 col-form-label'>Értékelés</label>
                    <div className='col-sm-9'>
                        <input type="number" className="form-control" id="ertekeles" min="1" max="5" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="kiadasEve" className='col-sm-3 col-form-label'>Kiadás éve</label>
                    <div className='col-sm-9'>
                        <input type="number" className="form-control" id="kiadasEve" min="1800" max={year} />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="kepneve" className='col-sm-3 col-form-label'>Kép URL</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="kepneve" />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Autó felvétele</button>
            </form>
        </div>
    )
}
