import React from 'react'
import CurrentLocation from './Components/CurrentLocation/ CurrentLocation'
import Forcast from './Components/ForCast/Forcast'
import "./App.css"

const App = () => {
  return (
    <div className='container'>
      <div className='currentLocation'><CurrentLocation /></div>
      <div className='forCast'><Forcast /></div>
    </div>
  )
}

export default App
