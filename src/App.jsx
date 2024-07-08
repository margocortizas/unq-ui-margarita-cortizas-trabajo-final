import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Difficulties from './containers/difficulties/difficulties'
import Home from './containers/home/home'
import Questions from './containers/questions/questions'


const App = ()=>{
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home/>}></Route>
        <Route path= "/difficulties" element={<Difficulties/>}></Route>
        <Route path= "/question/:difficulty" element={<Questions/>}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
