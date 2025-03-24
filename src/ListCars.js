import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function ListFilms({theme}) {
  const [cars, setCars] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let sortedImages = [];

  useEffect(() => {
    GetData();
  }, []);

  function GetData() {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_URL}/api/Jarmuvek`)
      .then((response) => {
        setCars(response.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));

    axios
      .get(`${process.env.REACT_APP_URL}/api/Kepek`)
      .then((response) => {
        setImages(response.data);
      })
      .catch((err) => console.error(err));
  }

  function Delete(id) {
    axios.delete(`${process.env.REACT_APP_URL}/api/Jarmuvek/?id=${id}`)
      .then(function () {
        alert("Sikeres törlés!");
        GetData();
      })
      .catch(function (error) {
        console.error(error);
        alert("Sikertelen törlés!")
      })
  }

  return (
    <div>

      <div className="p-5 m-auto text-center content bg-ivory">
        <h1 className="page-title-gradient">Autók:</h1>
        {isLoading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Betöltés...</span>
            </div>
          </div>
        ) : cars.length === 0 ? (
          <p className="text-light mt-3">Nincs megjeleníthető autó.</p>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 fade-in">
            {cars.map(function (data) {
              sortedImages = images.filter(
                (image) => image.jarmuId === data.id
              );
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex" key={data.id}>
                <Card
                  key={data.id}
                  car={data}
                  images={sortedImages}
                  handleDelete={Delete}
                  theme={theme}
                />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
