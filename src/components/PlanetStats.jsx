function PlanetStats({ planet }) {
  const stats = [
    { label: 'Rotation Time', value: planet.rotation },
    { label: 'Revolution Time', value: planet.revolution },
    { label: 'Radius', value: planet.radius },
    { label: 'Average Temp.', value: planet.temperature }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="border border-white/20 px-6 py-4 flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start gap-2"
        >
          <p className="text-xs opacity-50 uppercase tracking-wider font-bold">
            {stat.label}
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-antonio uppercase">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  )
}

export default PlanetStats
