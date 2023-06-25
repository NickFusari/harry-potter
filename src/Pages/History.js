import React from 'react';
import '../CSS/History.css';
import { history } from '../Data';
import Hogwarts from '../Img/hogwarts-history-1.jpg';
import Platform from '../Img/platform.jpg';
import Houses from '../Img/houses.jpg';

const History = () => {
  return (
    <div className="historyContainer">
        <div className="fadedBack">
            <div className="innerContent">

                <h1>History and Overview of Hogwarts</h1>
                <p>{history.establishment}</p>
                <img src={Hogwarts} alt="Hogwarts castle from the side" />
                <p>{history.middle}</p>
                <h2>Admission</h2>
                <p>{history.admission}</p>
                <img src={Platform} alt="Platform" />
                <p>{history.arrival}</p>
                <h2>Houses</h2>
                <p>{history.houses}</p>
                <img src={Houses} alt="Houses" />


            </div>
        </div>
    </div>
  )
}

export default History