import Header from './components/Header'
import Cart from './pages/Cart'
import Photos from './pages/Photos'
import React from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css'

function App() {

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path='/' element={<Photos/>}/>
          <Route exact path='/Cart' element={<Cart/>}/>
         
        </Routes>
     
    </div>
  )
}

export default App


// Routes used inplace of Switch
// create route where one can change from A to B vice-versa