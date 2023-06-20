import React from 'react';
import '../CSS/Houses.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import HouseCards from '../Components/HouseCards';

const Houses = () => {

    const [house, setHouse] = useState([]);
    const [characters, setCharacters] = useState([]);


    useEffect(()=>{

      axios.get("https://wizard-world-api.herokuapp.com/houses")
      .then(data => setHouse(data.data));

      axios.get('https://hp-api.onrender.com/api/characters')
      .then(data => setCharacters(data.data));
    }, []);

  return (
    <div>
       <HouseCards houseInfo={house} characters={characters}/>
    </div>
  )
}

export default Houses;