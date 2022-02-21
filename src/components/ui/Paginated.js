import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import { getPaginatedData, getSortData } from '../../helpers/getData';
import './styles/paginated.css';



export const Paginated = ( { onChangePage, data, sortBy, count, loading }) => {

    const pageCount = count ? Math.ceil(count/8) : 0;
    const pages = [{value: -1, name: 'previous'}];
    const [page, setPage] = useState(1);
    const firstPage = getPaginatedData(data, 1);
    let sortData = [];
    let paginatedData = firstPage;
    
    useEffect(() => {
        if (!loading) {
            if (sortBy !== '') sortData = getSortData(data, sortBy);
            else sortData = data;
            paginatedData = getPaginatedData(sortData, page);
            onChangePage(paginatedData);
        }
        const pageLiCollection = document.getElementsByClassName('pagination-li');
        const pageLiArr = Array.from(pageLiCollection);

        pageLiArr.map((li) => li.value == page ? li.classList.add('active') : li.classList.remove('active'));
    }, [loading, page, sortBy]);
    
    const handlePageClick = (e) => {
        const value = e.target.value;
        sortData = sortBy ? getSortData(data, sortBy) : data;
        paginatedData = getPaginatedData(sortData, value, page, pageCount);
        onChangePage(paginatedData);
        if (value > 0) setPage(value);
        else if (value === -1 && page - 1 > 0) setPage(() => page-1);
        else if (value === -2 && page + 1 <= pageCount) setPage(() => page+1);    
    };
    
    for (let i = 0; i < pageCount; i++) {
        pages.push({value: i+1, name: i+1});
    };

    pages.push({value: -2, name: 'next'});

  return (
    <ul className='pagination-ul'>
        {
            pages.map((page) => <li 
            className='pagination-li'
            value={page.value}  
            key={page.value} 
            onClick={handlePageClick}>{page.name}</li>)
        }
    </ul>
  )
}

Paginated.propTypes = {
    onChangePage: PropTypes.func.isRequired, 
    data: PropTypes.array.isRequired, 
    sortBy: PropTypes.any.isRequired, 
    count: PropTypes.number, 
    loading: PropTypes.any.isRequired
}