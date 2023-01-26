import React, { useState } from 'react'
import locations from "../data/data.js"

const Home = () => {
  const [index, setIndex] = useState(0);
  const { id, title, info, image } = locations[index];
  const checkNumber = (number) => {
    if (number > locations.length - 1) {
      return 0;
    }
    if (number < 0) {
      return locations.length - 1;
    }
    return number;
  };
  const nextLocation = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevLocation = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomLocation = () => {
    let randomNumber = Math.floor(Math.random() * locations.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <section>
      <div className="slider-container">
        <div className="slider-card" key={id + "slider"}>
                      <i class="fa-solid fa-chevron-left left" onClick={prevLocation}></i>
                      <i class="fa-solid fa-chevron-right right" onClick={nextLocation}></i>
                      <img src={image} alt={title} />
                      <h4>{title}</h4>
                      <p>{info}</p>
        </div>
      </div>
      <button className='random-btn' onClick={randomLocation}>surprise me</button>
    </section>
  )
}

export default Home