import { StarshipCard } from '../../components/starships/StarshipCard';
import { shallow } from 'enzyme'

describe('Tests <StarshipCard />', () => {

    const wrapper = shallow( <StarshipCard key={ 'https://swapi.py4e.com/api/starships/2/' } 
        shipName={ 'CR90 corvette' }
        shipCapacity={ '3000000' }
        MGLT={ '60' }
        consumables={ '1 year' }
        costInCredits={ '3500000' }
        crew={ '30-165' }
        hyperDriverRating={ '2.0' }
        manufacturer={ 'Corellian Engineering Corporation' }/> );

    test('should display correctly', () => {
        
       expect( wrapper ).toMatchSnapshot();
        
    })

})