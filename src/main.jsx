import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)