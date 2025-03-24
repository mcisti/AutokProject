import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function SingleCar({ theme }) {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [images, setImages] = useState([]);  

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/Jarmuvek/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.error(err));

    axios
      .get(`${process.env.REACT_APP_URL}/api/Kepek`)
      .then((res) => {
        const carImages = res.data.filter((img) => img.jarmuId == id);
        setImages(carImages);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!car) {
    return (<div className="text-center my-5">
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Betöltés...</span>
    </div>
  </div>)
  }

  return (
    <div className={`container py-5 ${theme === "dark" ? "text-light" : "text-dark"}`}>
      <h2 className="page-title-gradient">Részletes adatok</h2>

      {/* Carousel képekhez */}
      {images.length > 0 ? (
        <div id="carImagesCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner rounded shadow">
            {images.map((img, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img src={img.eleresiUt} className="d-block w-100 object-fit-cover" style={{ height: "400px" }} alt="Autó" />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carImagesCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" />
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carImagesCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      ) : (
        <div className="alert alert-secondary text-center">Nincs kép feltöltve az autóról.</div>
      )}

      {/* Autó adatok */}
      <div className={`card shadow ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
        <div className="card-body">
          <h3 className="card-title">{car.marka} {car.tipus}</h3>
          <p><strong>Évjárat:</strong> {car.evjarat}</p>
          <p><strong>Kilométeróra:</strong> {car.kilometer.toLocaleString()} km</p>
          <p><strong>Szín:</strong> {car.szin}</p>
          <p><strong>Motor típusa:</strong> {car.motorTipus}</p>
          <p><strong>Hengerűrtartalom:</strong> {car.motorMeret} L</p>
          <p><strong>Teljesítmény:</strong> {car.teljesitmeny} LE</p>
          <p><strong>Sebességváltó:</strong> {car.sebessegvalto}</p>
          <p><strong>Állapot:</strong> {car.allapot}</p>
          <p><strong>Felszereltség:</strong> {car.felszereltseg}</p>
          <p><strong>Hirdetés típusa:</strong> {car.elojel}</p>
          <p><strong>Ár:</strong> {car.ar.toLocaleString()} Ft</p>
          <p><strong>Műszaki érvényesség:</strong> {car.muszakiVizsga?.split("T")[0]}</p>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/" className="btn btn-outline-primary">Vissza a főoldalra</Link>
      </div>
    </div>
  );
}