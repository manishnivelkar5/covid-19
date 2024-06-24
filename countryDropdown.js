//src/CountryDropdown.js
import React, { useState, useEffect } from 'eact';
import API from './API';

const CountryDropdown = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('usa');

    useEffect(() => {
        API.fetchCountryList().then((data) => {
            setCountries(data.map((country) => ({ label: country.name, value: country.alpha2code})));
        });
    }, []);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };
    
    return (
        <select value={selectedCountry} onChange={handleCountryChange}>
            {countries.map((country) => (
                <option key={country.value} value={country.value}>
                {country.label}
                </option>
            ))}
        </select>
    );
};
