import React from 'react';
import './Country.css'

const Country = (props) => {
     const {name, flag, capital, population, region} = props.country;
    console.log(props.country);
    return (
        <div className='country'>
            <h2>This is {name}</h2>
            <img src={flag} alt="" />
            <p><small>Region {region}</small></p>
            <h5>This is her capital {capital} and its population {population}</h5>
        </div>
    );
};

export default Country;