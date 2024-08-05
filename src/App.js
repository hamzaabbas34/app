import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'

export default function App() {
  return (
    <div className='w-100 relative'>
    <BrowserRouter>
     < Home/>
     <About/>
    </BrowserRouter>
    </div>
  )
}
