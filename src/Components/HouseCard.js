import React from 'react';
import { useState } from 'react';
import '../CSS/HouseCard.css';
import {AiOutlineClose} from 'react-icons/ai';
import PlaceHolder from '../Img/placeholder.png';

const HouseCards = ({houseInfo, extraData, characters}) => {

    const [expanded, setExpanded] = useState(false);
    
  return (
    <>
    {
        expanded ? (
            <ExpandedCard houseInfo={houseInfo} extraData={extraData} characters={characters} setExpanded={()=> setExpanded(false)}/>
         ) : (
            <SimpleCard houseInfo={houseInfo} extraData={extraData} setExpanded={()=> setExpanded(true)}/>
         )
    }
    </>
  )
}

const SimpleCard = ({houseInfo, extraData, setExpanded}) => {

  const shadow = "0px 0px 10px 1px " + extraData[0];

  return (
    <div onClick={setExpanded} style={{boxShadow: shadow}} className='simpleCard'>
        <div className="smallImgContainer">
          <img src={extraData[1]} alt="House Logo" />
        </div>
        <h2>{houseInfo.name}</h2>
        <span style={{backgroundColor: extraData[0]}} className='separate'></span>
        
        <div className='houseDetails'>

          <div>
            <h3>Colours: </h3>
            <p>{houseInfo.houseColours}</p>
          </div>

          <div>
            <h3>Founder: </h3>
            <p>{houseInfo.founder}</p>
          </div>

          <div>
            <h3>Animal: </h3>
            <p>{houseInfo.animal}</p>
          </div>

          <div>
            <h3>Room: </h3>
            <p>{houseInfo.commonRoom}</p>
          </div>
        </div>
    </div>
  )
}

const ExpandedCard = ({houseInfo, extraData, setExpanded, characters}) => {

  const shadow = "0px 0px 10px 1px " + extraData[0];

  return (
    <div className='expand'>
      <div className="faded" style={{boxShadow: shadow}}>
        <div className="topContainer">
          <div className="imgContainer">
            <img src={extraData[2]} alt="House Banner" />
          </div>
          <div>
            <h1 className='alternativeTitle'>{houseInfo.name}</h1>
          </div>
          <div className="textContainer">
            <h1>{houseInfo.name}</h1>
            <div className="fullData">
              <div className="firstAdditionalData">
                <h3>Colours:</h3>
                <p>{houseInfo.houseColours}</p>
                <h3>Founder:</h3>
                <p>{houseInfo.founder}</p>
                <h3>Animal:</h3>
                <p>{houseInfo.animal}</p>
                <h3>Room:</h3>
                <p>{houseInfo.commonRoom}</p>
                <h3>Element:</h3>
                <p>{houseInfo.element}</p>
                <h3>Ghost:</h3>
                <p>{houseInfo.ghost}</p>
              </div>
              <div className="secondAdditionalData">
                <h3>Heads:</h3>
                <ul>
                  {
                    houseInfo.heads.map(e =>{

                      return <li>{e.firstName} {e.lastName}</li>
                    })
                  }
                </ul>
                <h3>Traits:</h3>
                <ul>
                  {
                    houseInfo.traits.map(e =>{

                      return <li>{e.name}</li>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className='buttonHolder'>
            <button onClick={setExpanded}><AiOutlineClose/></button>
          </div>
        </div>
        <div className="bottomContainer">
          <h2 className='charList'>Members of the House:</h2>
          <div className="wrapper">
            <table className='charTable'>
              <tr style={{backgroundColor: extraData[0]}} className='charRow'>
                <th>Image</th>
                <th>Name</th>
                <th>Patronus</th>
                <th>Actor</th>
                <th>Date of Birth</th>
              </tr>
              {
                characters.map(c => {

                  return (
                    <tr className='charRow'>
                      <td><img src={c.image === "" ? PlaceHolder:c.image} alt="character" className='charImage'/></td>
                      <td>{c.name}</td>
                      <td>{c.patronus}</td>
                      <td>{c.actor}</td>
                      <td>{c.dateOfBirth}</td>
                    </tr>
                  )
                })
              }
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseCards;