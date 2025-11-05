import './index.css'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { GlobalProvider } from './context/GlobalContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalProvider>
  </StrictMode>,
)
