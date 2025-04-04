import React from 'react'

export default function Admin() {

    const isAdmin = localStorage.getItem("role") === "Admin";

    if (!isAdmin) {
        return <h1 className='p-5 m-auto text-center content bg-ivory'>Hozzáférés megtagadva.</h1>
    }



  return (
    <div className="p-5 m-auto text-center content bg-ivory">Admin</div>
  )
}
