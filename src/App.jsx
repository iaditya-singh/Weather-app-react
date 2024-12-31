import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Indore from './components/Indore'
import Bhopal from './components/Bhopal'
import Pune from './components/Pune'
import Mumbai from './components/Mumbai'
import Banglore from './components/Banglore'
import Navbar from './components/Navbar'
import Weather from './components/weather'






function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
<Routes>
<Route path='/'  element={<Weather/>}/>
<Route path='/:city' element={<Indore/>} />
<Route path='/bhopal' element={<Bhopal/>} />
<Route path='/pune' element={<Pune/>} />
<Route path='/mumbai' element={<Mumbai/>} />
<Route path='/banglore' element={<Banglore/>} />


</Routes>

    
    
    </BrowserRouter>


    
    </>
  )
}

export default App