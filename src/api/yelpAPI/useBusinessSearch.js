import get from "./YelpApi";

export function useBusinessSearch(term, location) {
    let businesses
    let total

    const searchParams = {term:"burgers", location};
    const fetchData = async (searchParams) => {
        debugger;
        try {
            const rawData = await get('/businesses/search', searchParams);
            const resp = await rawData.json();
            // setBusinesses(resp.businesses);
            // setAmountResults(resp.total);
            businessses= resp.businesses;
            total = resp.total;
        } catch (e){
            console.error(e);
        }
        
    };
    const results = fetchData(searchParams)

    
    return;

}