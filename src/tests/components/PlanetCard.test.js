import { shallow } from 'enzyme'
import { PlanetCard } from '../../components/planets/PlanetCard';

describe('Tests <PlanetCard />', () => {

    const wrapper = shallow( <PlanetCard  
        planetName='Tatooine' 
        planetPopulation='200000' 
        planetClimate='arid' /> );

    test('should display correctly', () => {
        
       expect( wrapper ).toMatchSnapshot();
        
    })

})