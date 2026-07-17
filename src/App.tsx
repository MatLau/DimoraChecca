import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { ComeRaggiungerci } from '@/pages/ComeRaggiungerci'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/come-raggiungerci" element={<ComeRaggiungerci />} />
    </Routes>
  )
}

export default App
