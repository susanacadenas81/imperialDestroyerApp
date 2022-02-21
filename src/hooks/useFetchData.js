import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllData } from "../helpers/getData";

export const useFetchData = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });    
    //const navigate = useNavigate();
    
    useEffect( () => {
        const callGetAllData = (category) => {
            const storageData = JSON.parse(localStorage.getItem(category));
            if (storageData && storageData.length) {
                setState({
                    count: storageData.length,
                    data: storageData,
                    loading: false
                }) 
            } else {
                getAllData({category}).then( data => {                
                    setState({
                        count: data.count,
                        data: data.results,
                        loading: false
                    }) 
                    }, err => { 
                        //navigate('/errorPage')
                    });
            }
        }
        
        if (category === 'starships') {
            callGetAllData('starships');
        } else {
            callGetAllData('planets')
        }

    }, [category])
    return state;

};