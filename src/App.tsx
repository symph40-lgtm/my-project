import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import BriefingPage from './pages/BriefingPage'
import EvidencePage from './pages/EvidencePage'
import PortfolioPage from './pages/PortfolioPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BriefingPage />} />
        <Route path="/evidence" element={<EvidencePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
