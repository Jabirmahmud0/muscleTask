import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
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
    <App />
  </StrictMode>,
)
