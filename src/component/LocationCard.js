import React, { useState } from 'react'

const LocationCard = ({location,deleteLocation}) => {
  const [readMore, setReadMore] = useState(false);
  return (
        <div className="card" key={location.id}>
                  <i className="fa-solid fa-delete-left icon delete" onClick={()=> deleteLocation(location.id)} ></i>
                  <img src={location.image} alt={location.title} />
                  <h4>{location.title}</h4>
                  <p>
                    {readMore ? location.info : `${location.info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                      {readMore ? 'show less' : '  read more'}
                    </button>
                  </p>
                </div>)
}

export default LocationCard