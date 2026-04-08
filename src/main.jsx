import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'
import './index.css'

document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.boxSizing = 'border-box'

const style = document.createElement('style')
style.textContent = `
  #root {
    width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    body {
      padding: 0 96px;
    }
    #root {
      max-width: 85%;
    }
  }
`
document.head.appendChild(style)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SmoothScroll />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
