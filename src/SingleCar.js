import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from './Card';
import axios from 'axios';
import Navbar from './Navbar';

export default function SingleCar() {

    const params = useParams()

    const [data, setData] = useState({});
  
    useEffect(() => {
      GetId()
    }, [])
    
    function GetId() {
      axios.get(`${process.env.REACT_APP_URL}/api/Jarmuvek/${params.id}`)
      .then(response => {
        setData(response.data);
      })
    }
  
  
    return (
      <div className='p-5 content bg-whitesmoke text-center mt-5'>
        <Navbar/>
        <h1>{data.name}</h1>
        <h1 className="title">{data.name}</h1>
        <Card car={data}/>
      </div>
      
    )
}
