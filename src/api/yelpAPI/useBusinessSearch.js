import { useEffect } from 'react';
import {useState} from 'react';
import * as api from './api';


export function useBusinessSearch(term, location) {
    const [businesses, setBusiness] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({term, location});

    useEffect(() => {

        setBusiness([]);
        const fetchData = async (searchParams) => {
            try {
                const rawData = await api.GET('/businesses/search', searchParams);
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
                setAmountResults(resp.total);
            } catch (e){
                console.error(e);
            }
            
        };
        fetchData();
    }, [searchParams]);
    return [businesses, amountResults, searchParams, setSearchParams];

}