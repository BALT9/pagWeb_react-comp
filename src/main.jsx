import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Titulo from './components/Titulo.jsx'
import Serie1 from './components/Serie1.jsx'

import Serie1form from './components/Serie1form.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Titulo></Titulo>
    <Serie1></Serie1>
    <Serie1form></Serie1form>
  </React.StrictMode>,
)
