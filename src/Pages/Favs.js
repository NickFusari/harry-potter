import React from 'react';
import '../CSS/Favs.css';

const Favs = () => {
  return (
    <div className='favsContainer'>
      <div className='fadedFavs'>
        <h1>Favourites</h1>
        <div className='favHouses'>
          <h2>Houses:</h2>
        </div>
        <div className='favPeopleAndPotions'>
          <div className='favPeople'>
            <h2>People:</h2>
          </div>
          <div className='favPotions'>
            <h2>Potions:</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favs