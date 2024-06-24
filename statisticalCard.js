//src/StatisticalCard.js
import React from 'eact';

const StatisticalCard = ({ data }) => {
    return (
        <div>
            <h2>Total cases: {data.cases}</h2>
            <h2>Recoveries: {data.recoveries}</h2>
            <h2>Deaths: {data.deaths}</h2>
        </div>
    );
};