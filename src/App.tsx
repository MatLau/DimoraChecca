import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { ComeRaggiungerci } from '@/pages/ComeRaggiungerci'
import { Privacy } from '@/pages/Privacy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/come-raggiungerci" element={<ComeRaggiungerci />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  )
}

export default App
