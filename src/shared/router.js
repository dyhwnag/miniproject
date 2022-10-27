import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import DetailUpdatePage from '../pages/DetailUpdatePage';

import Login from '../pages/Login';
import TourAll from '../pages/TourAll';
import Signup from '../pages/Signup';



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/update/:id' element={<DetailUpdatePage />} />

        <Route path='/addpost' element={<AddPage />} />
        <Route path='/posts' element={<TourAll />} />

        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;