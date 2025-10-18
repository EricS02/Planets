function PlanetImage({ planet, activeTab }) {
  const getImageSrc = () => {
    if (activeTab === 'structure') {
      console.log(planet.images.internal)
      return planet.images.internal
    }
    console.log(planet.images.planet)

    return planet.images.planet
  }

  const getImageSize = () => {
    const sizes = {
      mercury: 'w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48',
      venus: 'w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52',
      earth: 'w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56',
      mars: 'w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52',
      jupiter: 'w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72',
      saturn: 'w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80',
      uranus: 'w-44 h-44 md:w-52 md:h-52 lg:w-64 lg:h-64',
      neptune: 'w-44 h-44 md:w-52 md:h-52 lg:w-64 lg:h-64'
    }
    return sizes[planet.name.toLowerCase()] || 'w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56'
  }

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <img
        src={getImageSrc()}
        alt={planet.name}
        className={`${getImageSize()} object-contain transition-all duration-300`}
      />
      {activeTab === 'geology' && (
        <img
          src={planet.images.geology}
          alt={`${planet.name} surface geology`}
          className="absolute bottom-8 md:bottom-12 lg:bottom-16 w-20 h-24 md:w-24 md:h-28 lg:w-32 lg:h-36 object-contain"
        />
      )}
    </div>
  )
}

export default PlanetImage
