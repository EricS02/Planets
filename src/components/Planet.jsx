import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import planetsData from '../data/data.json'
import PlanetImage from './PlanetImage'
import PlanetTabs from './PlanetTabs'
import PlanetStats from './PlanetStats'

function Planet() {
  const { planetName } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const [planet, setPlanet] = useState(null)

  useEffect(() => {
    const foundPlanet = planetsData.find(
      p => p.name.toLowerCase() === planetName?.toLowerCase()
    )
    setPlanet(foundPlanet)
    setActiveTab('overview') // Reset to overview when planet changes
  }, [planetName])

  if (!planet) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <p className="text-2xl">Planet not found</p>
      </div>
    )
  }

  const getContent = () => {
    switch (activeTab) {
      case 'overview':
        return planet.overview
      case 'structure':
        return planet.structure
      case 'geology':
        return planet.geology
      default:
        return planet.overview
    }
  }

  const content = getContent()

  return (
    <main className="container mx-auto px-6 py-8 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-16">
        {/* Planet Image */}
        <div className="flex justify-center items-center h-[300px] md:h-[400px] lg:h-[500px]">
          <PlanetImage planet={planet} activeTab={activeTab} />
        </div>

        {/* Planet Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-antonio uppercase mb-4">
              {planet.name}
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-6">
              {content.content}
            </p>
            <a
              href={content.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity"
            >
              Source:
              <span className="underline font-bold">Wikipedia</span>
              <img src="/icon-source.svg" alt="External link" className="w-3 h-3" />
            </a>
          </div>

          {/* Tabs */}
          <PlanetTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            planetName={planet.name}
          />
        </div>
      </div>

      {/* Stats */}
      <PlanetStats planet={planet} />
    </main>
  )
}

export default Planet
