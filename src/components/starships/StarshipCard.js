import { formatBigNumbers } from '../../helpers/numbers';
//import '../styles/components.css';
import './starships.css';
import PropTypes from 'prop-types';

export const StarshipCard = ({ shipName, shipCapacity, MGLT, consumables, costInCredits, crew, hyperDriverRating, manufacturer }) => {
  const name = shipName.toLowerCase().replace(' ', '');
  const imagePath = `/assets/starships/${name}.png`
  const change2DefaultImage = (event) => {
    event.target.src = 'assets/default.webp';
  }
  return (
    <div className='card'>
        <div className='data-wrapper'>

            <div className='header-card'>
                <div className='title-card'> { shipName } </div>
            </div>

            <div className='starship-image-wrapper'>
              <img className='starship-image' src={ imagePath } onError={change2DefaultImage}/>
            </div>

            <div className='data-card'>
                <p>
                  <b>Cargo capacity</b>: {formatBigNumbers(shipCapacity)}
                </p>
                <p>
                  <b>MGLT</b>: {MGLT}
                </p>
                <p>
                  <b>Consumables</b>: {consumables}
                </p>
                <p>
                  <b>Cost in credits</b>: {formatBigNumbers(costInCredits)}
                </p>
                <p>
                  <b>Crew</b>: {crew}
                </p>
                <p>
                  <b>Hyperdriver Rating</b>: {hyperDriverRating}
                </p>
                <p>
                  <b>Manufacturer</b>: {manufacturer}
                </p>
            </div>
        </div>
    </div>
  )
}

StarshipCard.propTypes = {
  shipName: PropTypes.string.isRequired, 
  shipCapacity: PropTypes.string.isRequired,
  MGLT: PropTypes.string.isRequired, 
  consumables: PropTypes.string.isRequired, 
  costInCredits: PropTypes.string.isRequired, 
  crew: PropTypes.string.isRequired, 
  hyperDriverRating: PropTypes.string.isRequired, 
  manufacturer: PropTypes.string.isRequired
}
