import { Routes, Route } from 'react-router-dom'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Home } from '@/pages/Home'
import { ComeRaggiungerci } from '@/pages/ComeRaggiungerci'
import { Privacy } from '@/pages/Privacy'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/come-raggiungerci" element={<ComeRaggiungerci />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  )
}

export default App
