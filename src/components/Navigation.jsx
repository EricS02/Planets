import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import planetsData from '../data/data.json'

const planetColors = {
  mercury: '#419EBB',
  venus: '#EDA249',
  earth: '#6D2ED5',
  mars: '#D14C32',
  jupiter: '#D83A34',
  saturn: '#CD5120',
  uranus: '#1EC1A2',
  neptune: '#2D68F0'
}

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { planetName } = useParams()

  const planets = planetsData.map(p => p.name.toLowerCase())

  return (
    <nav className="border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-antonio uppercase tracking-wider">
            The Planets
          </h1>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <img
              src="/icon-hamburger.svg"
              alt="Menu"
              className="w-6 h-6"
            />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            {planets.map((planet) => (
              <li key={planet}>
                <Link
                  to={`/${planet}`}
                  className={`text-xs font-bold uppercase tracking-widest opacity-75 hover:opacity-100 transition-opacity relative py-6 block ${
                    planetName === planet ? 'opacity-100' : ''
                  }`}
                  style={{
                    borderTop: planetName === planet ? `3px solid ${planetColors[planet]}` : 'none',
                    marginTop: planetName === planet ? '-3px' : '0'
                  }}
                >
                  {planet}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="md:hidden pb-4 space-y-2">
            {planets.map((planet) => (
              <li key={planet}>
                <Link
                  to={`/${planet}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-5 h-5 rounded-full"
                      style={{ backgroundColor: planetColors[planet] }}
                    />
                    <span className="text-sm font-bold uppercase tracking-widest">
                      {planet}
                    </span>
                  </div>
                  <img
                    src="/icon-chevron.svg"
                    alt=""
                    className="w-2 h-2 opacity-50"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navigation
