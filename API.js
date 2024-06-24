//src/API.js
import axios from 'axios';

const API = {
    async fetchCountryList() {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            return response.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    } , 

    async fetchhistoricalData(Country) {
        try {
            const response = await axios.get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=1500`);
            return response.data;
        } catch (error) {
            console.error(error);
            return {};
        }
    } ,
    n
};