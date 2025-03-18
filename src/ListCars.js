import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from 'axios';
import Navbar from './Navbar';

export default function ListFilms() {

  const [cars, setCars] = useState([]);
  const [images, setImages] = useState([]);
  let sortedImages = [];

  useEffect(() => {
    GetData()
  }, [cars])

  function GetData() {
    axios.get(`${process.env.REACT_APP_URL}/api/Jarmuvek`)
      .then(response => {
        setCars(response.data);
      })

    axios.get(`${process.env.REACT_APP_URL}/api/Kepek`)
      .then(response => {
        setImages(response.data);
      })

  }

  return (
    <div>
      <Navbar/>

      <div className='p-5 m-auto text-center content bg-ivory'>
        <h1 className="title">Autók:</h1>
        <div className='row'>
          {
            cars.map(function (data) {
              sortedImages = images.filter(image => image.jarmuId === data.id);          
              return <Card car={data} images={sortedImages} get={GetData} />
            })
          }
        </div>
      </div>
    </div>
  )
}
