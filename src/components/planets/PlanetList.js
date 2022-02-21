import { PlanetCard } from './PlanetCard';
import { useFetchData } from '../../hooks/useFetchData';
import './planets.css'
import { useState, useEffect } from 'react';
import { Paginated } from '../ui/Paginated';

export const PlanetList = () => {
  const { count, data, loading } =  useFetchData('planets');
  const [paginatedData, setPaginatedData] = useState([]);
  let sortData = [];

  const onChangePage = (paginatedData) => {
    setPaginatedData(paginatedData)
  }

  useEffect(() => {
    if (!loading) localStorage.setItem('planets', JSON.stringify(data));
  }, [loading])
  
  
  return (
    <>
    
      <div className='planet-list-wrapper'>  
          {
              paginatedData.map((planet) => <PlanetCard key={planet.url} 
                  planetName={planet.name} 
                  planetPopulation={planet.population} 
                  planetClimate={planet.climate} 
              />)
          }
      </div>

      <Paginated 
        onChangePage={ onChangePage } 
        data={ data } 
        sortBy=''
        count={ count }
        loading={ loading }
      />
    </>
  )
}
