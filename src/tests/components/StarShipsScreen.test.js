import { shallow } from 'enzyme'
import '@testing-library/jest-dom';
import { StarShipsScreen } from '../../components/starships/StarShipsScreen';

describe('Tests StarShipsScreen', () => {
    
    const wrapper = shallow(<StarShipsScreen />)

    test('should display correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    })
})