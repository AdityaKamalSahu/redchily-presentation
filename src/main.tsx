import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PresentationShell } from './components/presentation/PresentationShell'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PresentationShell />
  </StrictMode>,
)
