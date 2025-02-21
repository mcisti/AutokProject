import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Nav from './Nav'

export default function ListPlayers() {

  const [database, setdatabase] = useState([])

  useEffect(() => {
    GetData()

  }, [])

  function GetData() {
    axios.get("https://chess.sulla.hu/chess")
      .then(function (response) {
        console.log(response)
        setdatabase(response.data);
      })
  }


  return (
    <div>
      <Nav />

      <div className='row'>
        {
          database.map(function (data) {
            return <Card player={data} get={GetData} />
          })
        }
      </div>
    </div>
  )
}
