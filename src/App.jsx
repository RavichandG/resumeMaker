import { useState } from 'react'
import { Link, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'

function App() {
 

  return (
    <div className='appPage'>
         <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
          <Route path='/resume' element={<Home></Home>}></Route>
          
         </Routes>
    </div>
  )
}

export default App
