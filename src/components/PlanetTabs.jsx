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

function PlanetTabs({ activeTab, setActiveTab, planetName }) {
  const color = planetColors[planetName.toLowerCase()]

  const tabs = [
    { id: 'overview', label: 'Overview', number: '01' },
    { id: 'structure', label: 'Internal Structure', number: '02' },
    { id: 'geology', label: 'Surface Geology', number: '03' }
  ]

  return (
    <div className="space-y-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`w-full text-left px-6 py-3 border transition-all uppercase text-xs md:text-sm font-bold tracking-widest ${
            activeTab === tab.id
              ? 'border-transparent'
              : 'border-white/20 hover:bg-white/10'
          }`}
          style={{
            backgroundColor: activeTab === tab.id ? color : 'transparent'
          }}
        >
          <span className="opacity-50 mr-4">{tab.number}</span>
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default PlanetTabs
