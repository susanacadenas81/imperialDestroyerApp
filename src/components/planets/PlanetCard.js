import PropTypes from 'prop-types';

import './planets.css'

export const PlanetCard = ({ planetName, planetPopulation, planetClimate }) => {
  const name = planetName.toLowerCase().replace(' ', '');
  const imagePath = `/assets/planets/${name}.png`;
  const population = planetPopulation === 'unknown' ? 'Unknown population' : 'Population of ' + planetPopulation/1000 + 'k'
  const change2DefaultImage = (event) => {
    event.target.src = 'assets/default.webp';
  }
  return (
    <div className='planet-card'>
        <div className='image-wrapper'>
            <img className='planet-image' src={ imagePath } alt={ imagePath } onError={change2DefaultImage}></img>
        </div>
        <div className='planet-data-wrapper'>
            <b> { planetName } </b>
            <div> { planetClimate } </div>
            <div> { population } </div>
        </div>
    </div>
  )
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetPopulation: PropTypes.string.isRequired,
  planetClimate: PropTypes.string.isRequired
}
