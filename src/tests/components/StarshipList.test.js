import { shallow } from 'enzyme'
import '@testing-library/jest-dom';
import { StarshipList } from '../../components/starships/StarshipList';
import { useFetchData } from '../../hooks/useFetchData';

jest.mock('../../hooks/useFetchData');

describe('Tests StarshipList component', () => {
    test('Should display correctly', () => {
        useFetchData.mockReturnValue({
            count: 0,
            data: [],
            loading: true
        })
        const wrapper = shallow(<StarshipList sortBy='' />);
        expect( wrapper ).toMatchSnapshot();
    })

    test('Should show items when data are loaded', () => {
        const starships = [
            {
                "name": "CR90 corvette",
                "model": "CR90 corvette",
                "manufacturer": "Corellian Engineering Corporation",
                "cost_in_credits": "3500000",
                "length": "150",
                "max_atmosphering_speed": "950",
                "crew": "30-165",
                "passengers": "600",
                "cargo_capacity": "3000000",
                "consumables": "1 year",
                "hyperdrive_rating": "2.0",
                "MGLT": "60",
                "starship_class": "corvette",
                "pilots": [],
                "films": [
                    "https://swapi.py4e.com/api/films/1/",
                    "https://swapi.py4e.com/api/films/3/",
                    "https://swapi.py4e.com/api/films/6/"
                ],
                "created": "2014-12-10T14:20:33.369000Z",
                "edited": "2014-12-20T21:23:49.867000Z",
                "url": "https://swapi.py4e.com/api/starships/2/"
            },
            {
                "name": "Star Destroyer",
                "model": "Imperial I-class Star Destroyer",
                "manufacturer": "Kuat Drive Yards",
                "cost_in_credits": "150000000",
                "length": "1,600",
                "max_atmosphering_speed": "975",
                "crew": "47,060",
                "passengers": "n/a",
                "cargo_capacity": "36000000",
                "consumables": "2 years",
                "hyperdrive_rating": "2.0",
                "MGLT": "60",
                "starship_class": "Star Destroyer",
                "pilots": [],
                "films": [
                    "https://swapi.py4e.com/api/films/1/",
                    "https://swapi.py4e.com/api/films/2/",
                    "https://swapi.py4e.com/api/films/3/"
                ],
                "created": "2014-12-10T15:08:19.848000Z",
                "edited": "2014-12-20T21:23:49.870000Z",
                "url": "https://swapi.py4e.com/api/starships/3/"
            }
        ]
        useFetchData.mockReturnValue({
            count: starships.length,
            data: starships,
            loading: false
        })
        const wrapper = shallow(<StarshipList sortBy='' />);
        expect ( wrapper ).toMatchSnapshot();
    })
})