import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState } from "react";
import { FaRocket, FaSortAmountDownAlt } from 'react-icons/fa'


import { StarshipList } from './StarshipList'
import './starships.css'

export const StarShipsScreen = () => {
  const [sortBy, setSortby] = useState('')
  const onSelect = (e) => {
    setSortby(() => e.value);
  }
  const sortOptions = [{value: 'cargo_capacity', label:'Capacity'}, {value:'crew', label:'Crew'}];
  return (
    <div className="screen-wrapper">
      <div className="header-screen">
        <h1 className="starships-section-title"><i><FaRocket className='title-icon' /></i>Starships</h1>
        <hr color='grey' width='65%' />
        <div className="dropdown">
          <i className="sort-icon"><FaSortAmountDownAlt/></i>
          <Dropdown options={sortOptions} onChange={onSelect} placeholder="Sort" />
        </div>
      </div>
        <StarshipList sortBy={sortBy} />
    </div>
  )
}
