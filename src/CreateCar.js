import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateCar({ theme, logged }) {
    const [formData, setFormData] = useState({
        hirdeto: localStorage.getItem("userId"),
        marka: "",
        tipus: "",
        evjarat: "",
        kilometer: "",
        szin: "",
        motorTipus: "",
        motorMeret: "",
        teljesitmeny: "",
        sebessegvalto: "",
        ar: "",
        allapot: "",
        felszereltseg: "",
        muszakiVizsga: "",
        elojel: "",
        kep1: "",
        kep2: ""
    });
    const [cars, setCars] = useState([])

    useEffect(() => {
      GetAllCars()
    

    }, [])

    function GetAllCars() {
          axios.get(`${process.env.REACT_APP_URL}/api/Jarmuvek`)
          .then((response) => {
            setCars(response.data);
          })
          .catch((err) => console.error(err))
      }
    

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) {
            navigate("/");
        }
    }, [logged, navigate])


    function handleSubmit() {
        console.log(formData);

        const {kep1, kep2, ...rest} = formData;

        axios.post(`${process.env.REACT_APP_URL}/api/Jarmuvek`, {
            ...rest,
            evjarat: Number(formData.evjarat),
            kilometer: Number(formData.kilometer),
            motorMeret: Number(formData.motorMeret),
            teljesitmeny: Number(formData.teljesitmeny),
            ar: Number(formData.ar),
        })
        .then(function () {
                alert("Sikeres mentés!");
                axios.post(`${process.env.REACT_APP_URL}/api/Kepek`, {
                    jarmuId: cars[cars.length-1].id + 1,
                    tipus: "kep",
                    eleresiUt: formData.kep2
                })
            })
        .then(function() {
                axios.post(`${process.env.REACT_APP_URL}/api/Kepek`, {
                    jarmuId: cars[cars.length-1].id + 1,
                    tipus: "kep",
                    eleresiUt: formData.kep1
                })
        })
        .catch(function(error) {
                console.error("Hiba a feltöltéskor: ", error);
        })
        .finally(function() {
            navigate("/")
        })
    }

    return (
        <div className={`p-5 content text-light text-center`}>
            <h1 className="page-title-gradient">Új autó felvitele:</h1>
            <form className="fade-in" onSubmit={function (event) {
                event.preventDefault()
                handleSubmit()
            }}>
                <div className='form-group row mb-4'>
                    <label htmlFor="marka" className='col-sm-3 col-form-label'>Márka:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="marka" value={formData.marka} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="tipus" className='col-sm-3 col-form-label'>Típus:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="tipus" value={formData.tipus} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="evjarat" className='col-sm-3 col-form-label'>Évjárat:</label>
                    <div className='col-sm-9'>
                        <input type="number" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="evjarat" min="1" max="2025" value={formData.evjarat} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="kilometer" className='col-sm-3 col-form-label'>Kilométeróra állás:</label>
                    <div className='col-sm-9'>
                        <input type="number" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="kilometer" min="0" max="1000000" value={formData.kilometer} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="szin" className='col-sm-3 col-form-label'>Szín:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="szin" value={formData.szin} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="motorTipus" className='col-sm-3 col-form-label'>Üzemanyag:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="motorTipus" value={formData.motorTipus} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="motorMeret" className='col-sm-3 col-form-label'>Hengerürtartalom:</label>
                    <div className='col-sm-9'>
                        <input type="number" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="motorMeret" value={formData.motorMeret} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="teljesitmeny" className='col-sm-3 col-form-label'>Teljesitmeny:</label>
                    <div className='col-sm-9'>
                        <input type="number" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="teljesitmeny" value={formData.teljesitmeny} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="sebessegvalto" className='col-sm-3 col-form-label'>Sebességváltó:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="sebessegvalto" value={formData.sebessegvalto} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="ar" className='col-sm-3 col-form-label'>Ár:</label>
                    <div className='col-sm-9'>
                        <input type="number" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="ar" value={formData.ar} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="allapot" className='col-sm-3 col-form-label'>Állapot:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="allapot" value={formData.allapot} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="felszereltseg" className='col-sm-3 col-form-label'>Felszereltség:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="felszereltseg" value={formData.felszereltseg} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="muszakiVizsga" className='col-sm-3 col-form-label'>Műszaki érvényesség:</label>
                    <div className='col-sm-9'>
                        <input type="date" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="muszakiVizsga" value={formData.muszakiVizsga} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="elojel" className='col-sm-3 col-form-label'>Hirdetés tipusa:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="elojel" value={formData.elojel} onChange={handleChange} required />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="kep1" className='col-sm-3 col-form-label'>Fő kép URL:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="kep1" value={formData.kep1} onChange={handleChange} />
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="kep2" className='col-sm-3 col-form-label'>Beltér kép URL:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="kep2" value={formData.kep2} onChange={handleChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Autó felvétele</button>
            </form>
        </div>
    )
}