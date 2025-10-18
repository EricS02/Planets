import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import Planet from './components/Planet'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/mercury" replace />} />
        <Route path="/:planetName" element={<Planet />} />
      </Routes>
    </div>
  )
}

export default App
