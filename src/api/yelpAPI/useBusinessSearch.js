import { useEffect } from 'react';
import {useState} from 'react';
import * as api from './api';


export function useBusinessSearch(term, location) {
    const [buesiness, setBusiness] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({term, location});

    useEffect(() => {

        setBusiness([]);
        const fetchData = async () => {
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