import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Houses from '../Pages/Houses';
import Favs from '../Pages/Favs';
import Search from '../Pages/Search';
import Home from '../Pages/Home.js';

const Context = () => {

    const location = useLocation();

  return (
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/houses' element={<Houses />} />
            <Route path='/search' element={<Search />} />
            <Route path='/favs' element={<Favs />} />
            <Route path='*' element={<Home />} />
        </Routes>
  )
}

export default Context;