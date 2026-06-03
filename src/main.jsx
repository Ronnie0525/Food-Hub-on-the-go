import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { LightboxProvider } from './components/Lightbox.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LightboxProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </LightboxProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
