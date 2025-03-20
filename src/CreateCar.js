import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

export default function CreateCar() {
    const navigate = useNavigate()

    function Post() {
        let newcar={
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
        }
        console.log(newcar)
        axios.post(`${process.env.REACT_APP_URL}/api/Jarmuvek`, newcar )
            .then(function () {

                navigate("/")
            })
    }

    return (
        <div className='p-5 content bg-whitesmoke text-center'>
            <Navbar />
            <h1 className="title">Új autó felvitele:</h1>
            <form onSubmit={function (event) {
                event.preventDefault()
                Post()
            }}>
                <div className='form-group row pb-3'>
                    <label htmlFor="id" className='col-sm-3 col-form-label'>Id:</label>
                    <div className='col-sm-9'>
                        <input type="number" className="form-control" id="id" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="hirdeto" className='col-sm-3 col-form-label'>hirdető:</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="hirdeto" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="marka" className='col-sm-3 col-form-label'>Márka:</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="marka" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="tipus" className='col-sm-3 col-form-label'>Típus:</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="tipus" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="evjarat" className='col-sm-3 col-form-label'>Évjárat:</label>
                    <div className='col-sm-9'>
                        <input type="number" className="form-control" id="evjarat" min="1" max="2025" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="kilometer" className='col-sm-3 col-form-label'>kilométeróra állás:</label>
                    <div className='col-sm-9'>
                        <input type="number" className="form-control" id="kilometer" min="0" max="1000000" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="szin" className='col-sm-3 col-form-label'>Szín:</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="szin" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="motorTipus" className='col-sm-3 col-form-label'>Üzemanyag:</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="motorTipus" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="motorMeret" className='col-sm-3 col-form-label'>Hengerürtartalom:</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="motorMeret" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="teljesitmeny" className='col-sm-3 col-form-label'>teljesitmeny:</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="teljesitmeny" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="sebessegvalto" className='col-sm-3 col-form-label'>Sebességváltó:</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="sebessegvalto" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="ar" className='col-sm-3 col-form-label'>Ár:</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="ar" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="allapot" className='col-sm-3 col-form-label'>Állapot:</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="allapot" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="felszereltseg" className='col-sm-3 col-form-label'>Felszereltség:</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="felszereltseg" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="muszakiVizsga" className='col-sm-3 col-form-label'>Műszaki érvényesség:</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="muszakiVizsga" />
                    </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="elojel" className='col-sm-3 col-form-label'>Hírdetés tipusa:</label>
                    <div className='col-sm-9'>
                        <input type="text" className="form-control" id="elojel" />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Autó felvétele</button>
            </form>
        </div>
    )
}
