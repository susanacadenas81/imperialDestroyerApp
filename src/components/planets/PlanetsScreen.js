import { FaGlobe } from 'react-icons/fa'

import { PlanetList } from "./PlanetList"
import './planets.css'

export const PlanetsScreen = () => {
  return (
    <div className="planet-screen-wrapper">
      <div className="header-planet-screen">
        <h1 className="section-title"><i><FaGlobe className='title-icon' /></i>Planets</h1><hr color='grey' width='77%' />
      </div>
      
      <PlanetList />
    </div>
  )
}
