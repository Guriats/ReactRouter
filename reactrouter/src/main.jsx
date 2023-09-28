import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import Heroes from "./pages/Heroes/Heroes.jsx"
import Heroe from "./pages/Heroe/Heroe.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
