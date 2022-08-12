import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3'
});

export const BEARER_TOKEN = 'fDbN1HAP_TkPbEzV5e-04ldTDzSz0rPhMRR9r0EnUSDgLbriYq7RQO-BqATkYPkn1PCUgCWk64cJIDJkOd489Qjw8OmNjRd61c1Ri9PdFB2F0gIulKiFzVWbD-jVYnYx';