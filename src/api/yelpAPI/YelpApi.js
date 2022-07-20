import { API_BASED_URL } from "./config";
import queryString from 'query-string';

export function get (path, queryParams) {
    const query = queryString.stringify(queryParams);
    return fetch(`${API_BASED_URL}${path}?${query}`, {
        headers: {
            Authorization: 'Bearer ${BEARER_TOKEN',
            Origin: 'localhost',
            withCredentials: true,
        }
    });
}