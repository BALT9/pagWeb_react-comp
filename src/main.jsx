import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Titulo from './components/Titulo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Titulo></Titulo>
  </React.StrictMode>,
)
