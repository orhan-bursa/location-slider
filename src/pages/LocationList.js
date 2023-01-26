import React, { useState } from 'react'
import LocationCard from '../component/LocationCard'
import locations from '../data/data'

const LocationList = () => {
  const [locationList, setLocationList] = useState(locations)

  const deleteLocation = (id) => {    
    setLocationList(prevState=>prevState.filter(c=>c.id!==id))
  }
  
  return (
    <div className="content-container">
            {locationList.map((location)=> <LocationCard location={location} deleteLocation={deleteLocation} />)}
          </div>
  )
}

export default LocationList