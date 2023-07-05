import React from 'react';
import HouseCard from './HouseCard.js';
import '../CSS/HouseCards.css';
import {extraData} from '../Data.js';

const HouseCards = ({houseInfo, characters}) => {

  return (
    <div className='cardHolder'>
        <div className='blurAndFade'>
            {
                houseInfo.map((t) => {

                    return(

                            <HouseCard houseInfo={t} extraData={extraData[t.name]} characters={characters.filter(g => g.house === t.name)}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default HouseCards;