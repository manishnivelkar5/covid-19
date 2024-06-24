//src/App.js
import React , { useState, UseEffect } from 'react';
import API from './API';
import CountryDropdown from './countryDropdown';
import StatisticalCard from './statisticalCard';
import LineChart from './LineChart';
import PieChart from './PieChart';

const App = () =>{
  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [historicalData, setHistoricalData] = useState({});

  UseEffect(() => {
    API.fetchHistoricalData(selectedCountry.then((data) => {
      setHistoricalData(data);

    }));
  }, [selectedCountry]);

  return (
    <div>
      <CountryDropdown />
      <statisticalCard data={historicalData} />
      <LineChart data={historicalData} />
      <PieChart data={historicalData} />
    </div>
  );
};

export default App;