import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';

export default function Image() {
    const [database, setDatabase] = useState([]);
    const [images, setImages] = useState({});

    useEffect(() => {
        GetData();
        GetImages(); // Képek lekérése
    }, []);

    // Járművek lekérése
    function GetData() {
        axios.get('http://localhost:5150/api/Jarmuvek')
            .then((response) => {
                console.log(response.data);
                setDatabase(response.data);
            })
            .catch((error) => {
                console.error('Hiba a járművek lekérésekor:', error);
            });
    }

    // Képek lekérése
    function GetImages() {
        axios.get('http://localhost:5150/api/Kepek')
            .then((response) => {
                console.log(response.data);
                const imagesById = response.data.reduce((acc, image) => {
                    acc[image.jarmuId] = image.eleresiUt; // Kép URL-ek összegyűjtése az ID alapján
                    return acc;
                }, {});
                setImages(imagesById); // Képek tárolása az ID alapú objektumban
            })
            .catch((error) => {
                console.error('Hiba a képek lekérésekor:', error);
            });
    }

    return (
        <div className="row">
            {database.map((car) => {
                // Ha van kép az adott járműhöz, azt átadjuk
                const carImage = images[car.id];
                return (
                    <Card
                        key={car.id}
                        car={car}
                        image={carImage} // Kép átadása a Card komponensnek
                        get={GetData}
                    />
                );
            })}
        </div>
    );
}