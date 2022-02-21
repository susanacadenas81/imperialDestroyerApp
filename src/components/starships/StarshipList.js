import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getSortData } from '../../helpers/getData';
import { useFetchData } from '../../hooks/useFetchData';
import { StarshipCard } from './StarshipCard';
import { Paginated } from '../ui/Paginated';

//import '../styles/components.css';
import './starships.css';

export const StarshipList = ( sortBy ) => {
  const { count, data, loading } = useFetchData('starships');
  const [paginatedData, setPaginatedData] = useState([]);
  const onChangePage = (paginatedData) => {
    setPaginatedData(paginatedData)
  }
  let sortData = [];
  useEffect(() => {
    if ( !loading ) {
      localStorage.setItem('starships', JSON.stringify(data));
      sortData = sortBy ? getSortData(data, sortBy) : data;
    }
  }, [loading, sortBy]);
    
    return (
      <>
      <div className='list-wrapper'>  
          {
              paginatedData.map((starship) => <StarshipCard 
                key={ starship.url } 
                shipName={ starship.name }
                shipCapacity={ starship.cargo_capacity }
                MGLT={ starship.MGLT }
                consumables={starship.consumables}
                costInCredits={starship.cost_in_credits}
                crew={starship.crew}
                hyperDriverRating={starship.hyperdrive_rating}
                manufacturer={starship.manufacturer}
              />)
              
          }
      </div>

      <Paginated 
        onChangePage={ onChangePage } 
        data={ data } 
        sortBy={ sortBy } 
        count={ count }
        loading={ loading }
      />

    </>
    )
}

StarshipList.propTypes = {
  sortBy: PropTypes.string.isRequired 
}
