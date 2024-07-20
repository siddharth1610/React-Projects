import React from 'react'
import { IMG_CDN } from "../../contansts"

const Cards = ({name,cuisines,slaString,cloudinaryImageId}) => {
  return (
    <div className="w-72 h-96 mx-5 m-6 bg-orange-200 p-5  shadow-xl text-black">
        <img className="h-40 w-96" src= {
            IMG_CDN + cloudinaryImageId
        } />
        <h2 className="font-bold text-lg">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{slaString}mins</h4>
    </div>
  )
}

export default Cards