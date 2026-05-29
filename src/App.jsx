import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Signup from './components/view/Signup'
import Login from './components/view/Login'
import Forgot from './components/view/Forgot'
import Reset from './components/view/Reset'
import Dashbord from './components/view/Dashbord'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/dashbord' element={<Dashbord />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
