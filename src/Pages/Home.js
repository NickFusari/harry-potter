import React from 'react';
import '../CSS/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='homeHero'>
        <div className='fadedHero'>
            <div className="title">
                <h2>Welcome to</h2>
                <h1>Hogwarts School of Witchcraft and Wizardry</h1>
            </div>
            <div className='description'>
                <p>We invite you to further explore the magical world of Harry Potter. Learn more about the School, Houses, Characters and Elixirs.</p>
            </div>

            <div className="button">

                <Link to='/history'>Discover the History of the School</Link>

            </div>

        </div>
    </div>
  )
}

export default Home;