import React from 'react'
import cnaHeader from "../assets/header.jpg"

const CNAHeader = () => {
  return (
    <div>
        <header className="h-40 w-100 flex justify-center bg-black overflow-hidden">
            <img className="h-40" src={cnaHeader} alt="" />
        </header>
    </div>
  )
}

export default CNAHeader