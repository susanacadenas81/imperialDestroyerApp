
export const getPlanets = async(next) => {
    //const url = next || 'https://swapi.dev/api/planets/?page=1';
    const url = next || 'https://swapi.py4e.com/api/planets/?page=1';

    const resp = await fetch( url );
    const data = await resp.json();
    return data;
}

export const getSpaceships = async(next) => {
    //const url = next || 'https://swapi.dev/api/starships/?page=1';
    const url = next || 'https://swapi.py4e.com/api/starships/?page=1';
    const resp = await fetch( url );
    const data = await resp.json();
    return data;
}

export const getAllData = async({ category }) => {

    const getter = category === 'planets' ? getPlanets : getSpaceships;
    let results = [];
    let data = await getter();
    results = results.concat(data.results);
    while(data.next) {
        data = await getPlanets(data.next)
        results = results.concat(data.results);
    }
    data.results = results;
    return data;
}

export const getPaginatedData = (data, page, previousPage, pageCount) => {

    if (page < 0) {
        if (page === -1 && previousPage - 1 > 0) page = previousPage - 1;
        else if (page === -1 && previousPage - 1 <= 0) page = previousPage;
        if (page === -2 && previousPage + 1 <= pageCount) page = previousPage + 1;
        else if (page === -2 && previousPage + 1 > pageCount) page = previousPage;
    }
    const end = page * 8;
    const start = end - 8;
    const data4Paginated = data.slice();
    
    return data4Paginated.slice(start, end);
}

export const getSortData = ( data, key ) => {
    if (key.sortBy === '') {
        return data;
    } else {
        const result = data.sort((firstData, secondData) => {
            const firstKey = Number(firstData[key.sortBy]);
            const secondKey = Number(secondData[key.sortBy]);
            if (firstKey < secondKey || firstKey === NaN) {
                return 1;
             }
              if (firstKey > secondKey || secondKey === NaN) {
             return -1;
             }
            return 0;
        })
        return result;
    }
}
