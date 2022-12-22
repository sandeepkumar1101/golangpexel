import React from 'react'
import Home from './component/home'
import ShowImage from './component/ShowImage'
import Header from './component/Header'
import { Routes, Route } from 'react-router-dom'
import ShowVideo from "./component/ShowVideo"

const App = () => {
  return (
    <div>
      <Header>
      </Header>
      <div className='content'>
        <Routes>
        <Route path="/:id" element={<ShowImage/>}></Route>
        <Route path="/videos/:id" element={<ShowVideo/>}></Route>
        <Route path="/" exact element={<Home/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App