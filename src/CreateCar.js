import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateCar({theme}) {
    const [formData, setFormData] = useState({
        hirdeto: "",
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
        elojel: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };
    
    const navigate = useNavigate();

    function handleSubmit() {

        axios.post(`${process.env.REACT_APP_URL}/api/Jarmuvek`, {
            ...formData,
            evjarat: Number(formData.evjarat),
            kilometer: Number(formData.kilometer),
            motorMeret: Number(formData.motorMeret),
            teljesitmeny: Number(formData.teljesitmeny),
            ar: Number(formData.ar),
          } )
            .then(function () {
                alert("Sikeres mentés!");
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
                    <label htmlFor="hirdeto" className='col-sm-3 col-form-label'>Hirdető:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="hirdeto" value={formData.hirdeto} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="marka" className='col-sm-3 col-form-label'>Márka:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="marka" value={formData.marka} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="tipus" className='col-sm-3 col-form-label'>Típus:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="tipus" value={formData.tipus} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="evjarat" className='col-sm-3 col-form-label'>Évjárat:</label>
                    <div className='col-sm-9'>
                        <input type="number" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="evjarat" min="1" max="2025" value={formData.evjarat} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="kilometer" className='col-sm-3 col-form-label'>Kilométeróra állás:</label>
                    <div className='col-sm-9'>
                        <input type="number" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="kilometer" min="0" max="1000000" value={formData.kilometer} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="szin" className='col-sm-3 col-form-label'>Szín:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="szin" value={formData.szin} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="motorTipus" className='col-sm-3 col-form-label'>Üzemanyag:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="motorTipus" value={formData.motorTipus} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="motorMeret" className='col-sm-3 col-form-label'>Hengerürtartalom:</label>
                    <div className='col-sm-9'>
                        <input type="number" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="motorMeret" value={formData.motorMeret} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="teljesitmeny" className='col-sm-3 col-form-label'>Teljesitmeny:</label>
                    <div className='col-sm-9'>
                        <input type="number" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="teljesitmeny" value={formData.teljesitmeny} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="sebessegvalto" className='col-sm-3 col-form-label'>Sebességváltó:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="sebessegvalto" value={formData.sebessegvalto} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="ar" className='col-sm-3 col-form-label'>Ár:</label>
                    <div className='col-sm-9'>
                        <input type="number" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="ar" value={formData.ar} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="allapot" className='col-sm-3 col-form-label'>Állapot:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="allapot" value={formData.allapot} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="felszereltseg" className='col-sm-3 col-form-label'>Felszereltség:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="felszereltseg" value={formData.felszereltseg} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="muszakiVizsga" className='col-sm-3 col-form-label'>Műszaki érvényesség:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="muszakiVizsga" value={formData.muszakiVizsga} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='form-group row mb-4'>
                    <label htmlFor="elojel" className='col-sm-3 col-form-label'>Hirdetés tipusa:</label>
                    <div className='col-sm-9'>
                        <input type="text" className={`form-control ${theme === 'dark' ? 'bg-secondary text-light' : ''}`} id="elojel" value={formData.elojel} onChange={handleChange} required/>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Autó felvétele</button>
            </form>
        </div>
    )
}
