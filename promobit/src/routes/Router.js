import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DetailsPage } from '../pages/details/DetailsPage'
import { HomePage } from '../pages/home/HomePage'


export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<HomePage/>}/>
            <Route  path="/detalhes" element={<DetailsPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}