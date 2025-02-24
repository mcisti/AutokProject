import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useParams } from 'react-router-dom';

export default function SinglePlayer() {
    const [data, setdata] = useState({})
    const params = useParams();
    const id = params.id;

    useEffect(() => {
      GetData()
    
    }, [])

    function GetData() {
        axios.get("http://localhost:5150/api/Jarmuvek"+id)
        .then(function(response) {
            console.log(response)
            setdata(response.data);
        })
    }
    
  return (
    <div className='row'>
        <Card player={data}/>
    </div>
  )
}
