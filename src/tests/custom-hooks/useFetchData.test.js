import { renderHook } from "@testing-library/react-hooks";
import { useFetchData } from "../../hooks/useFetchData";



describe ('useFetchData tests', () => {
    test('should return the initial state', () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchData( 'starships' ));
        const {data, loading} = result.current;

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    });

    test('should return data and loading false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchData( 'starships' ));
        await waitForNextUpdate({timeout: 5000});

        const {data, loading} = result.current;
        expect( data.length ).toBe( 37 );
        expect( loading ).toBe( false );
    })
}) 