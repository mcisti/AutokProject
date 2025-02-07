import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

export default function Ujfilm() {
    const [database, setdatabase] = useState([])

    useEffect(() => {
      GetData()
    
    }, [])

    function GetData() {
        axios.get("https://film.kando-dev.eu/Film")
        .then(function(response) {
            console.log(response)
            setdatabase(response.data);
        })
    }
    

  return (
    <div className='row'>
        {
            database.map(function (data) {
                return <Card film={data} get={GetData}/>
            })
        }
    </div>
  )
}