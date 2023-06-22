import React from 'react'
import { Route,Routes } from 'react-router-dom'
import App from './App'
import List from './List'
function Apps() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='list' element={<List/>}/>
        </Routes>
    </div>
  )
}

export default Apps