import React, {useState, useEffect} from 'react';
import Potion from '../Img/potion.png';
import Placeholder from '../Img/placeholder.png';
import '../CSS/Search.css';
import axios from 'axios';

const Search = () => {

  const [search, setSearch] = useState('');

  const [elixirs, setElixirs] = useState([]);
  const [characters, setCharacters] = useState([]);
  const allInData = [...elixirs, ...characters];

  const results = allInData.filter(n => {

    return n.name.toLowerCase().includes(search.toLowerCase());
  });
 
  console.log(results);

  useEffect(()=>{

    axios.get("https://wizard-world-api.herokuapp.com/elixirs")
    .then(data => setElixirs(data.data));

    axios.get('https://hp-api.onrender.com/api/characters')
    .then(data => setCharacters(data.data));
  }, []);

  return (
    <div className='seachContainer'>
      <div className="fadedBackground">
        <div className="seachbar">
          <input type="text" placeholder='Search...' autoComplete='off' onChange={e => {
            setSearch(e.target.value);
          }}/>
        </div>
        <div className="conentContainer">

          {
            results.map(e => {

              return(
                <div className='allInContent'>
                  <h3>{e.name}</h3>
                  {
                    e.image !== undefined && e.image !== "" 
                    ? <img className="allInImg" src={e.image} alt={e.name} />
                    :<>
                        {
                        e.species !== undefined
                        ? <img className="allInImg" src={Placeholder} alt={e.name} />
                        : <img className="allInImg" src={Potion} alt={e.name} />
                        }
                    </>
                  }
                  <p>
                    {
                      e.species === undefined ?
                      <>{e.effect === undefined? "Effect: unknown": "Effect: " + e.effect}</>
                      :
                      <>{e.house === '' ? "House: unknown" : "House: " + e.house}</>
                    }
                  </p>
                  <p>
                    {
                      e.species === undefined ?
                      <>{e.sideEffects === null ? "Side Effects: unknown" : "Effect: " + e.sideEffects}</>
                      :
                      <>{e.ancestry === '' ? "Ancestry: unknown" : "Ancestry: " + e.ancestry}</>
                    }
                  </p>
                  <p>
                    {
                      e.species === undefined ?
                      <>{"Difficulty: " + e.difficulty}</>
                      :
                      <>{e.patronus=== '' ? "Patronus: unknown": "Patronus: " + e.patronus}</>
                    }
                  </p>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Search