import { shallow } from 'enzyme'
import '@testing-library/jest-dom';
import { PlanetsScreen } from '../../components/planets/PlanetsScreen';

describe('Tests StarShipsScreen', () => {
    
    const wrapper = shallow(<PlanetsScreen />)

    test('should display correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    })
})